const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const mime=require('mime');
app.set("view engine","ejs");

app.use(express.static(require('path').join(__dirname, './static')));
app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3000);