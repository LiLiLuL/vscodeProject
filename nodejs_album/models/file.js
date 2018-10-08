//所有跟文件有关的模型

//真正干活的是model
var fs=require("fs");
exports.getAllAlbums = function(callback){
    fs.readdir("./upload",function(err,files){
        if(err){
            callback("没有找到upload文件",null);
        }
        var allAlbums = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allAlbums);
                callback(null,allAlbums);
                return;
            }
            fs.stat("./upload/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}


exports.getAllImagesByAlbumName=(albumName,callback)=>{
    fs.readdir("./upload/"+albumName,(err,files)=>{
        if(err){
            callback("找不到图片",null);
            return;
        }
        var allImages=[];
        (function iterator(i){
            if(i==files.length){
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("./upload/"+albumName+"/"+files[i],(err,stats)=>{
                if(err){
                    callback("找不到照片"+files[i],null);
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
        
}

