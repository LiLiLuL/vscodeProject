let db=require('../model/db');
let md5=require('../model/md5');

exports.showLogin=(req,res,next)=>{
    let a={
        code:1,msg:'未登录'
    }
    res.send(a);
}