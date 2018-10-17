const express=require('express');
const app=express();
const fs=require('fs');
const gm=require('gm');
app.set("view engine","ejs");
app.use(express.static('./public'));
app.get("/",(req,res,next)=>{
    res.render("cutimage");
});

app.get("/docut",(req,res,next)=>{
    let filename = req.query.filename;
    let w = req.query.w;
    let h = req.query.h;
    let x = req.query.x;
    let y = req.query.y;

    gm("./public/images/img26.jpg")
        .crop(w,h,x,y)
        .resize(100,100,"!")
        .write("./public/images/img26.jpg",function(err){
        if(err){
            res.send("-1");
            return;
        }
        res.send("1");
    });

})
app.listen(3000);