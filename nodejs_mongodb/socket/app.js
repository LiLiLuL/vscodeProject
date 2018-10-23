let express=require('express');
let app=express();
//公式
let http=require('http').Server(app);
let io=require('socket.io')(http);
let session=require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
}));
app.use(express.static('./public'));
app.set("view engine","ejs");
let alluser=[];
//中间件
app.get("/",(req,res,next)=>{
     res.render("index");
});
app.get("/check",(req,res,next)=>{
    let username=req.query.username;
     if(req.query.username==" "){
         res.send('you have to have a username');
         return;
     }
     if(alluser.indexOf(username)!=-1){
         res.send("the username have done");
         return;
     }
     alluser.push(username);
     req.session.username=username;
     res.redirect("/chat");

});
//聊天室
app.get("/chat",(req,res,next)=>{
    if(req.session.username==""){
        res.send("此页面需要登陆");
        return;
    }
    res.render('chat',{
        "username":req.session.username
    });
})
//画画
app.get("/draw",(req,res,next)=>{
    res.render("draw");
})
io.on("connection",socket=>{
      socket.on("talk",msg=>{
          console.log(msg);
          io.emit("talk",msg);
      });
      socket.on("draw",msg=>{
        //  console.log(msg);
        io.emit("answer",msg);
      })
})

//监听
http.listen(3000);