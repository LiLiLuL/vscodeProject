//班级说说项目，可以注册登录，发表说说，可以对他人的说说进行点赞以及评论
const express=require('express');
const app=express();
let router=require('./router/router');
let session=require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
}));
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));

//路由表
app.get("/",router.showIndex);

app.get("/register",router.showRegister);
app.post("/doregister",router.showDoRegister);

app.get("/login",router.showLogin);
app.post("/dologin",router.doLogin);

app.get("/changeimage",router.showChangeImage);
app.post("/dochangeimage",router.doChangeImage);
app.get("/imagecut",router.showImageCut);
app.get("/doimagecut",router.doImageCut);

app.listen(4000);