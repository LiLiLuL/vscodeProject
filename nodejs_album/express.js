const http=require('http');
const fs=require('fs');
var express=require('express');
var app=express();
app.use((req,res,next)=>{
    console.log("this is the app.use");
    next();
})
app.get("/aab",(req,res)=>{
    res.send('hello');
});
app.get('/student/:id',(req,res,next)=>{
    var id=req.params['id'];
    var reg=/^[\d]{6}$/;
    if(reg.test(id)){
        res.send(id);
    }else{
        res.send("please check your message")
    }
    next();
});
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("form");

});
app.post("/",(req,res)=>{
    //将数据上传至数据库
    res.send("success");

});
app.get("/:username/:id",(req,res,next)=>{
    console.log(req.params.username);
    next();
})
app.get("/admin/login/",(req,res)=>{
    console.log('login');
})

// http.createServer((req,res)=>{
//    res.end('great');
// }).listen(3000,'127.0.0.7');
app.listen(3000,'127.0.0.1');