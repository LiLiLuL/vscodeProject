const express=require("express");
const app=express();
const formidable = require('formidable');
const md5=require("./moduel/md5");
const db=require("./moduel/db");

app.set("view engine","ejs");
app.use(express.static("./public"));
//注册页面
app.get("/regist",(req,res,next)=>{
    res.render("md5_login")
})
//执行注册页面
app.get("/doregist",(req,res,next)=>{
    const username=req.query.username;
    let password=req.query.password;
    //加密
    password=md5(md5(password).substr(4,7)+md5(password));

    //把用户名和密码存入数据库
    db.insertOne("loginuser",{
        "username":username,
        "password":password
    },(err,result)=>{
        if(err){
            res.send("-1");
            return;
        }
        res.send("1");

    })
})


//登录页面
app.get("/login",(req,res,next)=>{
    res.render("md5_login")
})
//执行登录界面
app.post("/dologin",(req,res,next)=>{
   
    const form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        const username=fields.username;
        let password=fields.password;
        password=md5(md5(password).substr(4,7)+md5(password));
        db.find("loginuser",{"username":username},(err,result)=>{
            if(result.length==0){
                res.send("-2");//没有这个人
                return;
            }
            const database_password=result[0].password;
            if(password==database_password){
                 res.send("1");
            }else{
                res.send("-1")
            }
        })
    })
})

app.listen(3002);