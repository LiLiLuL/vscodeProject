let formidable=require('formidable');
let db=require('../moduel/db');
let md5=require('../moduel/md5');
let path=require('path');
let fs=require('fs');
let gm=require('gm');
//首页
exports.showIndex=(req,res,next)=>{
    //检索数据库，查找头像
    if(req.session.login=="1"){
        db.find('discuss',{"username":req.session.username},(err,result)=>{
            let avatar=result[0].avatar||"default.jpg";
            res.render("discuss_index",{
                "login":req.session.login=="1"?true:false,
                "username":req.session.login=="1"?req.session.username:"",
                "active":"index",
                "avatar":avatar
            })
        })

    }else{
        res.render("discuss_index",{
            "login":req.session.login=="1"?true:false,
            "username":req.session.login=="1"?req.session.username:"",
            "active":"index",
            "avatar":"default.jpg"
        })
    }
    console.log(req.session.login)
   
}
//注册页面
exports.showRegister=(req,res,next)=>{
    res.render("discuss_register",{
        "login":req.session.login=="1"?true:false,
        "username":req.session.login=="1"?req.session.username:"",
        "active":"register"
    });
}
//注册业务
exports.showDoRegister=(req,res,next)=>{
    //得到用户填写的东西
    //查询数据库中是否存在此用户
    //保存这个人
    let form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        let username=fields.username;
        let password=fields.password;
        password=md5(md5(password)+password.substring(0,5)+md5(password));
        db.find('discuss',{"username":username},(err,result)=>{
            console.log(result.length);
            if(err){
                res.send("-3");
                return;
            }
            if(result.length !=0){
                res.send("-1");
                return;
            }
            db.insertOne("discuss",{
                "username":username,
                "password":password,
                "avatar":"default.jpg"
            },(err,result)=>{
                if(err){
                    res.send("-3");
                    return;
                }
                req.session.login="1";
                req.session.username=username;
                req.session.password=password;
                res.send("1");
            })
        })
    })
}

//登录页面
exports.showLogin=(req,res,next)=>{
    res.render("discuss_login",{
        "login":req.session.login=="1"?true:false,
        "username":req.session.login=="1"?req.session.username:"",
        "active":"login"
    })
}
//登录业务
exports.doLogin=(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        let username=fields.username;
        let password=fields.password;
        password=md5(md5(password)+password.substring(0,5)+md5(password));
        db.find('discuss',{"username":username},(err,result)=>{
            console.log(result);
            if(err){
                res.send("-3");
                return;
            }
            if(result.length ==0){
                res.send("-1");
                return;
            }
                 if(password==result[0].password){
                    req.session.login="1";
                    console.log(req.session.login);
                    req.session.username=username;
                    req.session.password=password;
                 res.send("1");
                 return;
                 }else{
                     res.send("-2");
                     return;
                 }
                
            
           
        })
    })
}
//更改头像

exports.showChangeImage=(req,res,next)=>{
    if(req.session.login!="1"){
        //设置响应格式为utf-8格式，解决中文乱码问题，以下两种方法皆可
        //res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end("这个页面需要登陆");
        return;
    }
    res.render("discuss_change_image",{
        "login":true,
        "username":req.session.login=="1"?req.session.username:"小小",
        "active":"changeimage"
    })
}

//剪裁头像
exports.doChangeImage=(req,res,next)=>{
    let form=new formidable.IncomingForm();
    //上传的文件的存放位置
    form.uploadDir=path.normalize(__dirname+"/../avatar");
    form.parse(req,(err,fields,files)=>{
       let oldpath=files.uploadimage.path;
       let newpath=path.normalize(__dirname+"/../avatar")+"/"+req.session.username+".jpg";
       fs.rename(oldpath,newpath,err=>{
           if(err){
               res.send('failure');
               return;
           }
           req.session.avatar=req.session.username+".jpg";
           //跳转剪裁图片的业务
           res.redirect("/imagecut");
       })
    })
}

exports.showImageCut=(req,res,next)=>{
    if(req.session.login!="1"){
        res.end("此页面需要登陆才行");
        return;
    }
    res.render("discuss_cutimage",{
        "avatar":req.session.avatar
    });
}

//执行切图页面
exports.doImageCut=(req,res,next)=>{
    if(req.session.login!="1"){
        res.end("此页面需要登陆才行");
        return;
    }
    console.log("avatar");
    console.log(req.session.avatar);
    let filename = req.session.avatar;
    let w = req.query.w;
    let h = req.query.h;
    let x = req.query.x;
    let y = req.query.y;
    console.log(x+""+y+""+w+""+h)
    gm("./avatar/"+filename)
        .crop(w,h,x,y)
        .resize(100,100,"!")
        .write("./avatar/"+filename,function(err){

        if(err){
            console.log(err);
            res.send('-1');
            return;
        }
        db.updateMany("discuss",{"username":req.session.username},{
            $set:{"avatar":req.session.avatar},
         }, function(err,results) {
                res.send("1");
            });
    
    });

}