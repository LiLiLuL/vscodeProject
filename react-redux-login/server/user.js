const express = require('express')
const model = require('./model/mydb')
const User = model.getModel('user')
const md5=require('./model/md5');
// 生成express路由中间件
const Router = express.Router();
function mymd5(pwd) {
    const m= 'jykjhkhk4561-`.WRL23K786ujkhFJ@1231!*@%!^';
    return md5.md5(md5.md5(m + pwd))
}
const _filter = {"__v": 0, "pwd": 0}

// CheckLogin.js 用户查询用户是否登录的接口
Router.get('/info', (req, res) => {
    const {userId} = req.cookies
    if (!userId) {
        res.json({code: 1, msg: '用户未登录'})
    }
    User.findOne({_id: userId}, _filter, (err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '服务器异常'})
        }
        if (doc) {
            return res.json({code: 0, msg: '用户已登录',data: doc})
        }
    })
})

Router.get('/list',(req,res,next)=>{
    User.find({},(err,doc) => {
        if(!err) {
            return res.json({code: 0, data: doc,msg: '用户列表获取成功'})
        }
    })
})
Router.post('/register', (req, res,next) => {
    const {username, pwd, type} = req.body;
    // 在user这个数据模型中查询用户注册的账号是否存在
    User.findOne({username}, (err, doc) => {
        //
        if (doc) {
            return res.json({code: 1, msg: '用户已存在'})
        }
        if (err) {
            console.log(err);
            return res.json({code: 1, msg: '服务器异常'})
        }
        User.create({username, pwd: mymd5(pwd), type}, (err, doc) => {
            if (err) {
                return res.json({code: 1, msg: '服务器异常'})
            }
            return res.json({code: 0, data: doc})
        })
    })
})
Router.post('/login', (req, res) => {
    const {username, pwd} = req.body;
    console.log(username);
    User.findOne({username, pwd: mymd5(pwd)}, _filter, (err, doc) => {
        if (!doc) {
            return res.json({code: 1, msg: '账号密码不正确'})
        }
        if (err) {
            return res.json({code: 1, msg: '服务器异常'})
        }
        res.cookie('userId',doc._id) // 登录成功保存cookie
        return res.json({code: 0, msg: '登录成功', data: doc})
    })
})
Router.get('/loginOut', (req, res) => {
    const {userId} = req.cookies;
    if(!userId) {
        res.json({code: 1, msg: '服务器异常'})
    }
    res.cookie('userId','');
    return res.json({code: 0, msg:'退出成功'})
})


module.exports = Router

