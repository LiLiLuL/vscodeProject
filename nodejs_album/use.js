
const fs=require('fs');
const express=require('express');
const app=express();

app.use(fileTest);
function fileTest(req,res,next){
    let filePath=req.originalUrl;
    //根据当前的网址，读取public文件夹中的文件
    //如果有这个文件则渲染这个文件
    //如果没有则next()
    fs.readFile("./public/"+filePath,(err,data)=>{
       if(err){
           //文件不存在
           next();
           return;
       }else{
           res.send(data.toString());
       }
    })
}
//二维数组含有1-20的数字，函数输出：1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 14, 13, 12
var array=[];
for(var i=1;i<5;i++){
    array[i]=new Array();
    for(let j=1;j<6;j++){
        array[i][j]=j+(i-1)*5;
        
    }
}
var newarray=[];
newarray=[...array[1].slice(1),...newarray];
for(var i=1;i<5;i++){
    newarray.push(array[i][5]);
}
newarray=[...newarray,...array[4].slice(1).reverse()];
newarray.push(array[3][1]);
newarray=[...newarray,...array[3].slice(2,5).reverse()];
const set=new Set(newarray);
console.log(Array.from(set));



//静态服务 
app.use(express.static("./public"));
//静态服务，所有/jingtai的路由都会从发（./public)中去找文件
app.use("./jingtai",express.static("./public"));

app.listen(3000);