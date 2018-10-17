const express=require('express');
const app=express();
const mongodb=require('./moduel/db');
const session=require('express-session');
//设置模板引擎
app.set("view engine","ejs");
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))

app.get('/',(req,res,next)=>{
    if(req.session.login=="1"){
        res.send("欢迎"+req.session.username);
    }else{
        res.send("登录失败")
    }
})
app.get('/login',(req,res,next)=>{
    res.render("login");
});
app.get("/checklogin",(req,res)=>{
    //根据用户填写的用户名和密码去数据库里相应的文档
    //根据不同的查找结果返回不同的结果
      let input_username=req.query.username;
      let input_password=req.query.password;
      mongodb.find("login",{"username":input_username},(err,result)=>{
          if(result.length==0){
              res.send("用户名不存在");
              return;
          }
          let database_password=result[0].password;
          if(database_password==input_password){
            req.session.login="1";
            req.session.username=result[0].username;
            res.send("登录成功，欢迎您"+result[0].username);
          }else{
              res.send("密码错误")
          }
      })
    
})
app.listen(3000);