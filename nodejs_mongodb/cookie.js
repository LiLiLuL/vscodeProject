var express=require('express');
var cookieParser=require("cookie-parser");
const app=express();
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.cookie('xihao','zhaoliying',{maxAge:900000,httpOnly:true});
    res.send("猜你喜欢"+req.cookies.aim);
});
app.get("/gonglue",(req,res)=>{
    const aim=req.query.aim;
    //记录用户喜好
    //先读取用户的喜好，然后把新的数据PUSH进入数组，然后设置新的cookie
    const aimarray=req.cookies.aim||[];
    aimarray.push(aim);
    res.cookie('aim',aimarray);
    res.send(aim+"旅游攻略");
})

app.listen(3000);