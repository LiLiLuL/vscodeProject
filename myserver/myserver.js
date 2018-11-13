const http=require('http');
let express=require('express');
let app=express();
let bodyParser=require('body-parser');//引入body parser用于解析post的body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}
);
app.use(express.static('./public'));
app.post("/password",(req,res,next)=>{
    let data=req.body;
    console.log(data);
    let message1={success:true};
    let message={success:false};
    if(data.userName==='123'&&data.password==='123456'){
        res.send(message1)
    }else{
        res.send(message);
    }
})


app.listen(3000);