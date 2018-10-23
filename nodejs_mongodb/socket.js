let http=require("http");
let fs=require('fs');
let server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("./index.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            res.end(data);
        })
    }
  
});

let io=require('socket.io')(server);
//监听连接事件
io.on("connection",socket=>{
    console.log("1个客户端链接了");
    socket.on("question",msg=>{
        console.log("I recevied a message"+":"+msg);
       //socket.emit("answer","I am fine");
       socket.emit("answer",msg);
       // socket.broadcast.emit("answer"," yes i am very fine"); //广播
       //io.emit("answer","yyyyyy");//广播
    })
})
server.listen(3000,"127.0.0.1")