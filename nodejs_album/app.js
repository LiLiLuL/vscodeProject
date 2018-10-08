//app.js负责路由

var express=require('express');
var app=express();
var router=require("./controller");
app.set("view engine","ejs");



app.use(express.static('./public'));
app.use(express.static('./upload'));
//首页
app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);

//最后的中间件
app.use((req,res)=>{
   res.render("err");
})
app.listen(3000);