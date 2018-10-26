const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
app.set("view engine","ejs");

app.use(express.static('./static'));
app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3001);