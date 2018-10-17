const express= require("express");
const session=require("express-session");
const app=express();

app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))

app.get("/",(req,res,next)=>{
    if(req.session.login){
        res.send("您已成功登陆"+req.session.username)
    }else{
        res.send("登录失败")
    }
})
app.get("/login",(req,res)=>{
    req.session.login=true;
    req.session.username='chexq'
     res.send("您已登录成功")
})
app.listen(3001);