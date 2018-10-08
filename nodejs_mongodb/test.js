const express=require('express');
const app=express();
const mongodb =require('./moduel/db');



app.get("/",(req,res)=>{
    //插入数据
     mongodb.insertOne("site",{"name":"xiaoqing"},(err,result)=>{
         if(err){
             console.log("failer");
             return;
         }
         res.send("insert success!")
     });
    
});
app.get("/insert",(req,res)=>{
    const product=[
        {
    title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
     },
     {
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "Runoob",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "NoSQL"
        ],
        "likes" : 110
    },{
        "name":"chenxq",
        "age":22,
        "sex":"woman",
        "height":157,
        "weight":130
    }
     ]
     mongodb.insertMany("products",product,(err,result)=>{
        if(err){
            console.log("failer");
            return;
        }
        res.send("insert many datas success!")
     })
});
//修改
app.get("/update",function(req,res){
    mongodb.updateMany(
        "site",      //集合名字
        {
            "name":"xiaoqing"       //改什么
        },
        {
            $set: { name: "cccxxxqqq" }     //怎么改
        },
        function(err,result){   //改完之后做什么
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    );
});
//删除
app.get("/delete",(req,res)=>{
    var borough=req.query.borough;
    mongodb.deleteMany("site",{"borough":borough},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
})


//查询
app.get("/du",(req,res)=>{
        const page=parseInt(req.query.page);
        mongodb.find("site",{},{"pageamount":"2","page":page},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result.length);
            res.send(result);
        });
    });

// //查找
// app.get("/du",function(req,res){
//     //这个页面现在接受一个page参数。
//     var page = parseInt(req.query.page);  //express中读取get参数很简单
//     //查找4个参数，在哪个集合查，查什么，分页设置，查完之后做什么
//     mongodb.find("site",{},{"pageamount":6,"page":page},function(err,result){
//         if(err){
//             console.log(err);
//         }
//         res.send(result);
//         console.log(result.length);
//     });
// });



app.listen(3000);
console.log('the test server is running')