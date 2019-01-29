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
        var  username=req.session.username;
    }else{
        var username="";
        var login=false;
    }
    db.find('discuss',{"username":req.session.username},(err,result)=>{
        if(result.length==0){
            var avatar="default.jpg";
        }else{
            var avatar=result[0].avatar;
        } 
            db.find('discuss',{},{ "sort":{"datetime":-1}},(err,results)=>{
               
                res.render("discuss_index",{
                    "login":req.session.login=="1"?true:false,
                    "username":req.session.login=="1"?req.session.username:"",
                    "active":"index",
                    "avatar":avatar,
                    "moments":results,
                    "alluser":results
                })
            });
          
        })
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
                "avatar":"default.jpg",
                "friendslist":[]
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
//发表说说
exports.doPublish=(req,res,next)=>{
    if(req.session.login!="1"){
        res.end("此页面需要登陆才行");
        return;
    }
    let form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
      let content=fields.content;
      db.insertOne("content",{
          "username":req.session.username,
          "datetime":new Date(),
          "content":content
    },(err,result)=>{
        if(err){
            
            res.send('-3');
            return;
        }
        res.send("1");
    })
    })
}

//列出所有的说说
exports.getAllMoments=(req,res,next)=>{
    var page=req.query.page;
    db.find("content",{},{"pageamount":9,"page":page,"sort":{"datetime":-1}},(err,result)=>{
        res.json(result);
    });
}
//得到用户信息
exports.getUserInfo=(req,res,next)=>{
    let username=req.query.username;
    db.find('discuss',{"username":username},(err,result)=>{
        let obj={
            "username":result[0].username,
            "avatar":result[0].avatar,
            "_id":result[0]._id
        }
        res.json(obj);

    })
}

//得到所有的说说数据
exports.getAllCount=(req,res,next)=>{
    db.getAllCount('content',function(count){
        // console.log(typeof(count));
        // let n=count;
        // n= n.toString();
        res.send(count.toString());
    })
}

//显示用户所有说说
exports.showPersonal=(req,res,next)=>{
    let user=req.params["user"];
    db.find('content',{"username":user},(err,result)=>{
      db.find("discuss",{"username":user},(err,results)=>{
        res.render("discuss_personal",{
            "login":req.session.login=="1"?true:false,
            "username":req.session.login=="1"?req.session.username:"",
            "user":user,
           "active":"personalmoments",
           "personalcontents":result,
           "personalavatar":results[0].avatar
        });
      })
       
    })
  
}
//显示所有的成员列表
exports.showAllUser=(req,res,next)=>{
    db.find("discuss",{ },(err,results)=>{
        res.render("discuss_alluser",{
           "alluser":results,
           "active":"allusers",
           "login":req.session.login=="1"?true:false,
            "username":req.session.login=="1"?req.session.username:"",
        });
      })
}
//个人中心
exports.showUserCenter=(req,res,next)=>{
    if(req.session.login!="1"){
        res.send("这个页面需要登陆");
        return;
    }
    let username=req.session.username;
    db.find('usercenter',{"username":username},(err,result)=>{
        if(err){
            res.send("-3");
            return;
        }
        res.render("discuss_usercenter",{
            "usercenter":result,
            "login":req.session.login=="1"?true:false,    
            "active":"usercenter",
            "username":req.session.login=="1"?req.session.username:"",

        })
    })
    
}

//退出、
exports.exist=(req,res,next)=>{
    res.render("discuss_index",{
        "login":false,
        "username":"",
        "active":"index"
    })
}

//忘记密码
exports.showForgetPassword=(req,res,next)=>{
    res.render("discuss_forgetpassword",{
        "login":req.session.login=="1"?true:false,    
        "active":"forgetpassword",
        "username":req.session.login=="1"?req.session.username:"",
    })
}
//更改密码
exports.doForgetPassword=(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        console.log(fields);
        let username=fields.username;
        let password=fields.newpassword;
        let confirmpassword=fields.confirmpassword;
        if(password===confirmpassword){
            password=md5(md5(password)+password.substring(0,5)+md5(password));
            db.find('discuss',{"username":username},(err,result)=>{
                if(err){
                    res.send("-3");
                    return;
                }
                if(result.length ==0){
                    res.send("-1");
                    return;
                }
                db.updateMany("discuss",{"username":username},{
                    $set:{"password":password},
                 }, function(err,results) {
                        res.send("1");
                    });              
            })
        }else{
            res.send("-4");
            return;
        }
       
       
    })
}


//添加好友
exports.addFriends=(req,res,next)=>{
    console.log(req.body);
    let form=new formidable.IncomingForm();
    let username=req.session.username;
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(fields);
        console.log(username);
        let friendsusername=fields.friendsusername;
        db.updateMany('discuss',{"username":username},{
            $addToSet:{"friendslist":friendsusername}
        },(err,reult)=>{
              if(err){
                  console.log(err);
                  return;
              }
            res.send("1");
        })
    })
}

//好友列表
exports.showFriendList=(req,res,next)=>{
    let username=req.params['user'];
    let arryFriend=[];
        db.find("discuss",{"username":username},(err,results)=>{
            let friendlist=results[0].friendslist;
            if(friendlist.length==0){
                res.send("-1");
                return;
            }
            for(let i=0;i<friendlist.length;i++){
                db.find("discuss",{"username":friendlist[i]},(err,result2)=>{
                     if(err){
                         res.send("-1");
                         return;
                     }
                    arryFriend=arryFriend.concat(result2);
                    if(i==friendlist.length-1){
                        res.render("discuss_friendlist",{
                            "login":req.session.login=="1"?true:false,
                            "username":req.session.login=="1"?req.session.username:"",
                            "user":username,
                            "active":"friendslist",
                            "friendlist":arryFriend,
                        });
                    }
                })            
            }
         
        })
         
}

//会话中心
exports.showTalkCenter=(req,res,next)=>{
    let username=req.params["user"];
    res.render("discuss_talkcenter",{
        "login":req.session.login=="1"?true:false,
        "username":req.session.login=="1"?req.session.username:"",
        "user":username,
        "active":"talkcenter"
    })
}
