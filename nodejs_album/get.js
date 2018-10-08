const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    console.log(req.query);
    res.render("form");
    res.send();
});
app.use(bodyParser.urlencoded({extended:false}))
app.post("/",(req,res)=>{
console.log(req.body)
})

app.listen(3000);