const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'student';
// Connect using MongoClient
MongoClient.connect(url, {useNewUrlParser:true},(err, client)=>{
// Use the admin database for the operation
const adminDb = client.db(dbName).admin();
if(err){
      console.log("connet false!");
      return;
  }
  console.log("connect success!")
const setcollect=client.db(dbName);
const myobj={
    name:"chenxq",
    age:22,
    url:"http://localhost:1717"
}
//创建集合
setcollect.createCollection('site',(err,res)=>{
    if (err) throw err;
    console.log("创建集合!");
    client.close();
})
//插入一条数据
setcollect.collection("site").insertOne(myobj,(err,res)=>{
    if(err) throw err;
    console.log("数据插入成功");
    client.close();
});
//插入多条数据
const manyobject=[
    {name:"zhaoliying",age:"30"},
    {name:"cxq",age:"22",sex:"woman"},
    {name:"chenxq",educated:"jilin university",major:"technology and science"}
]
setcollect.collection("site").insertMany(manyobject,(err,res)=>{
    if(err) throw err;
    console.log("多条数据插入成功");
    client.close();
});

//查询指定条件的数据
setcollect.collection("site").find({"age":22}).toArray((err,result)=>{
    if(err) throw err;
    console.log("查询成功"+result);
    client.close();
});

//更新数据,更新同插入一样，更新一条数据是updateOne,更新多条数据是updateMany.
const wherestr={"name":"zhaoliying"};
const updatestr={$set:{"job":"actress"}};
setcollect.collection("site").updateOne(wherestr,updatestr,(err,result)=>{
    if(err) throw err;
    console.log("update success");
    client.close();
});

//删除数据,删除一条数据deleteOne,删除多条数据deleteMany
setcollect.collection("site").deleteMany({"name":"chenxq"},(err,obj)=>{
    if(err) throw err;
    console.log(obj.result.n+"delete success");
    client.close();
});

//排序 使用 sort() 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)。
setcollect.collection("site").find().sort({"age":-1}).toArray((err,result)=>{
    if(err) throw err;
    console.log(result);
    client.close();
})

//如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
//如果要指定跳过的条数，可以使用 skip() 方法。
setcollect.collection("site").find().limit(2).toArray((err,result)=>{
    if(err) throw err;
    console.log(result);
    client.close();
});
setcollect.collection("site").find().skip(1).limit(2).toArray((err,result)=>{
    if(err) throw err;
    console.log(result);
    client.close();
});

//使用 drop() 方法来删除集合：

app.get("/",(req,res)=>{
    res.send("hello")
})
});

app.listen(3000);
