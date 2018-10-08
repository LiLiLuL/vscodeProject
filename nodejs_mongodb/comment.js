//留言本，能够进行增、删、改、查
const express=require('express');
const app=express();
const db=require("./moduel/db");
const formidable=require('formidable');
const ObjectId=require('mongodb').ObjectID;
//设置模板引擎
app.set("view engine","ejs");

//静态
app.use(express.static("./public"));

//显示留言列表
app.get("/",(req,res,next)=>{
    db.getAllCount("comments",(count)=>{
        res.render("index",{
            "pageamount":Math.ceil(count/4)
        });
    });
      
});
//读留言数据
app.get("/du",(req,res,next)=>{
    const page=parseInt(req.query.page);
    db.find("comments",{},{"sort":{"date":-1},"pageamount":4,"page":page},(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
      res.json({"result":result});
    })
});
//表单提交
app.post("/comments",(req,res,next)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
      console.log("收到请求了"+fields.name + fields.comments);
      //写入数据库
    db.insertOne("comments",{
        "name":fields.name,
        "comments":fields.comments,
        "date":new Date()     
    },(err,result)=>{
        if(err) {
            res.json({"state":-1}); //-1是给ajax看的
            return;
        }
        res.json({"state":1});
    });
    });
});

app.get("/a",(req,res,next)=>{
    db.getAllCount("comments",(count)=>{
        res.send(count.toString());
    });
})
app.get("/delete",(req,res,next)=>{
    var id=req.query.id;
    db.deleteMany("comments",{"_id":ObjectId(id)},(err,result)=>{
        res.send("delete success")

    })
})

//增加留言列表


app.listen(3000);