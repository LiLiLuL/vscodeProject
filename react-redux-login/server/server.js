let express=require('express');
let app=express();
let router=require('./router/router');
let userRouter=require('./user');
let bodyParser=require('body-parser');//引入body parser用于解析post的body
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}
);

app.get('/info',router.showLogin);
app.use('/user',userRouter);
app.listen(4000);