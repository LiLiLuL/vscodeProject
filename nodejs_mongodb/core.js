"use strict";
let Nightmare = require('nightmare');
const log4js = require('log4js');
var express = require('express');
var app = express();

log4js.configure({
    appenders: { info: { type: 'DateFile', filename: 'logs/', pattern: 'yyyy-MM-dd.log', alwaysIncludePattern: true } },
    categories: { default: { appenders: ['info'], level: 'info' } }
});

const logger = log4js.getLogger('info');

const InvoiceGiveByJqbh = function(username, password, rest, count, url) {
    return new Promise((resolve, reject) => {
        let nightmare = Nightmare({
            waitTimeout: 100000,
            show: true
        });
        nightmare
            .on('console', function(type, message) {
                console.log(`[${new Date()}]${message}`);
                logger.info(`${message}`);
            })
            .viewport(1200, 900)
            // .goto('http://172.28.128.126:9001/SKServer')
            .goto(url)
            .type('#czydm', username)
            .type('#yhkl', password)
            .click('.login_btn')
            .wait('body')
            .wait(1000)
            .evaluate(function(username, rest, count) {
                return new Promise((resolve, reject) => {
                    $.ajaxSetup({
                        async: false
                    });
                    var webRest = 0,
                        applyRest = 0;

                    $.post("/SKServer/fpgl/queryFpypcx.do", { fplxdm: '026' }, function(data, textStatus, jqXHR) {
                        var htmlObj = $("<div>" + data + "</div>");
                        var text = htmlObj.find(".pageContent .table tr td:nth-child(4)").eq(0).text();
                        applyRest = Number(text);
                    });

                    $.get("/SKServer/wsgp/init.do?target=navTab&rel=wsgp_nav&_=" + new Date().getTime(), function(data, textStatus, jqXHR) {
                        var htmlObj = $("<div>" + data + "</div>");
                        var fpdm = htmlObj.find(".pageContent table tbody tr td:nth-child(2)").text();
                        var qshm = htmlObj.find(".pageContent table tbody tr td:nth-child(3)").text();
                        var zzhm = htmlObj.find(".pageContent table tbody tr td:nth-child(4)").text();
                        var rest = htmlObj.find(".pageContent table tbody tr td:nth-child(5)").text();
                        webRest = { fpdm: fpdm, qshm: qshm, zzhm: zzhm, rest: rest };
                    });
                    console.log(`[${username}]发票剩余数量${rest},发票应用中数量${applyRest},网上可申领总数量:${webRest.rest}(为空则为税局端不稳定，请稍候).`);
                    if (Number(webRest.rest) < Number(count)) {
                        count = Number(webRest.rest);
                    }
                    let zzhm = Number(webRest.qshm) + Number(count) - 1;
                    $.get("/SKServer/wsgp/gp.do?fplxdm=026&fpdm=" + webRest.fpdm + "&qshm=" + webRest.qshm + "&fs=" + count + "&zzhm=" + zzhm + "&_=" + new Date().getTime(),
                        function(data, textStatus, jqXHR) {
                            if (textStatus == "success") {
                                console.log(`${count}张${data.message}`);
                                resolve({ allRest: Number(webRest.rest) - Number(count), currentRest: Number(rest) + Number(count), applyRest: applyRest });
                            } else {
                                resolve({ allRest: webRest.rest, currentRest: rest, applyRest: applyRest });
                            }
                        });
                });
            }, username, rest, count)
            .end()
            .then(x => {
                console.log(x);
                resolve(x);
            })
            .catch(function(err) {
                console.log(err);
                reject({ allRest: -1, currentRest: rest, applyRest: -1 });
            });
    });
}

const GetInvoiceCountByJqbh = function(username = 'admin', password = '123456', jqbh, url) {
    return new Promise((resolve, reject) => {
        let nightmare = Nightmare({
            waitTimeout: 100000,
            show: true
        });
        nightmare
            .on('console', function(type, message) {
                console.log(`[${new Date()}]${message}`);
            })
            .viewport(1200, 900)
            //.goto('http://172.28.128.126:9001/SKServer')
            .goto(url)
            .type('#czydm', username)
            .type('#yhkl', password)
            .click('.login_btn')
            .wait('body')
            .wait(1000)
            .evaluate(function(jqbh) {
                var sum1 = Number(0);
                $.ajaxSetup({
                    async: false
                });
                $.post("/SKServer/jkyj/selectJkyj.do?type=6", { fwqbh: jqbh, pageNum: 1, pageSize: 1000 }, function(data, textStatus, jqXHR) {
                    var htmlObj = $("<div>" + data + "</div>");
                    htmlObj.find("table tbody tr td:nth-child(7)").each(function() {
                        sum1 += Number($(this).text());
                    });
                });
                return sum1;
            }, jqbh)
            .end()
            .then(x => {
                resolve(x);
            })
            .catch(function(err) {
                console.log(err);
                reject(-1);
            });
    });
}

app.get('/Baiwang/:jqbh/:count', function(req, res) {
    let mainname = req.query.mainname,
        mainpassword = req.query.mainpassword,
        username = req.query.username,
        password = req.query.password,
        url = new Buffer(req.query.url, 'base64'),
        count = req.params.count,
        jqbh = req.params.jqbh;
    //返回发票数量
    GetInvoiceCountByJqbh(mainname, mainpassword, jqbh, url.toString()).then(x => {
        // if (x > count) {
        //     res.send({ allRest: 0, currentRest: x, applyRest: 0 });
        // } else {
        InvoiceGiveByJqbh(username, password, x, count, url.toString()).then(x => {
            res.send(x);
        }, x => {
            res.send(x);
        });
        // }
    }, x => {
        res.send({ allRest: 0, currentRest: x, applyRest: 0 });
    });
});

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('SplitInvoice app listening at http://%s:%s', host, port);
});