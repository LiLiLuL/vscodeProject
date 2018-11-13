//班级说说项目，可以注册登录，发表说说，可以对他人的说说进行点赞以及评论
const express=require('express');
const app=express();
let router=require('./router/router');
let session=require('express-session');
let bodyParser=require('body-parser');//引入body parser用于解析post的body

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
}));
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));

// app.all('*',(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// }
// );
//路由表
app.get("/",router.showIndex);

//注册
app.get("/register",router.showRegister);
app.post("/doregister",router.showDoRegister);

//登录
app.get("/login",router.showLogin);
app.post("/dologin",router.doLogin);

//头像剪裁
app.get("/changeimage",router.showChangeImage);
app.post("/dochangeimage",router.doChangeImage);
app.get("/imagecut",router.showImageCut);
app.get("/doimagecut",router.doImageCut);

//发表说说
app.post("/dopublish",router.doPublish);

//列出所有的说说
app.get("/allmoments",router.getAllMoments);

//列出用户信息
app.get("/userinfo",router.getUserInfo);
//得到说说的总数量
app.get("/allcount",router.getAllCount);

//得到个人页面
app.get("/mymoments/:user",router.showPersonal);
//得到所有成员
app.get("/alluser",router.showAllUser);
//进入个人中心设置
app.get("/usercenter",router.showUserCenter);

//退出
app.get("/exist",router.exist);
app.listen(4000);