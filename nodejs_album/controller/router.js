//router.js是函数的罗列
var file=require("../models/file");
exports.showIndex=function(req,res){
    // res.render("index",{
    //     "albums":file.getAllAlbums()
    // });
    //内存函数不调用return,调用的是高层函数提供的参数
    file.getAllAlbums((err,allAlbums)=>{
        if(err){
            next();
            return;
        }
        res.render("index",{
            "albums":allAlbums
        })
    })
}

exports.showAlbum=function(req,res,next){
    //res.send("相册"+req.params.albumName)
    var albumName=req.params.albumName;
    file.getAllImagesByAlbumName(albumName,(err,imagesArray)=>{
        if(err){
            res.render("err")
            return;
        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    })
   
}