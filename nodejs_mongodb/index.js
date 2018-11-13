const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'products';

app.get("/",(req,res)=>{
    MongoClient.connect(url, {useNewUrlParser:true},(err,client)=>{
        if(err){
            console.log("faile");
            return;
        }
        res.send("hello");
        console.log("success");
        client.close();
    })
})
app.get("/ddd/:id",(req,res,next)=>{
    let id=req.params["id"];
    console.log(id);
    console.log(6000);
    res.send("1");
})

app.listen(3001);
console.log("the server is running");