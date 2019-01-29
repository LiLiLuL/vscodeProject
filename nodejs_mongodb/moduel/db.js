//这个模块封装了所有对数据库的常用操作
//可以讲链接数据库封装成函数
const MongoClient=require('mongodb').MongoClient;
const settings=require("../setting");
const url=settings.dburl;
const dbName="user";
function _connectDB(callback){
    MongoClient.connect(url, {useNewUrlParser:true},(err,client)=>{
        if(err){
            callback(err,null);
            return;
        }
        const setconnect=client.db(dbName);
        
        console.log("connect to the mongodb success!");
        callback(err,client);

    })
}

init();
function init(){
    _connectDB((err,client)=>{
        if(err){
            callback(err,null);
            return;
        } 
        const setconnect=client.db(dbName);
        setconnect.collection('discuss').createIndex(
            {"username":1},
            null,
            (err,results)=>{
                if(err){
                    callback(err,null);
                    return;
                }

                console.log("索引建立成功");
            }
        )
    })
}

//插入一条数据
exports.insertOne=function(collectionName,json,callback){
    _connectDB((err,client)=>{
        //表示数据库连接成功后做的事
        const setconnect=client.db(dbName);
        setconnect.collection(collectionName).insertOne(json,(err,result)=>{
            callback(err,result);
            client.close();
        })
    });
     
}
//插入多条数据
exports.insertMany=function(collectionName,array,callback){
    _connectDB((err,client)=>{
        const setconnect=client.db(dbName);
       setconnect.collection(collectionName).insertMany(array,(err,result)=>{
           callback(err,result);
           client.close();
       })
    })
}
//查找数据,找到所有数据
// exports.find=function(collectionName,json,C,D){
//     var result=[];
//     if(arguments.length==3){
//         var callback=C;
//         var skipnumber=0;
//         var limit=0;
//     }else if(arguments.length==4){
//         var callback=D;
//         var args=C;
//         var skipnumber=args.pageamount*args.page||0;
//         var limit=parseInt(args.pageamount)||0;
//         var sort=args.sort||{};
//     }else{
//        throw new Error("find 函数的参数个数必须是3个或者4个");
//         return;
//     }
//     _connectDB((err,client)=>{
//     const setconnect=client.db(dbName);  
//     const cursor=setconnect.collection(collectionName).find(json).skip(skipnumber).limit(limit).sort(sort);
//     cursor.forEach((err, doc)=> {
//         if (err) {
//             callback(err, null);
//             client.close(); //关闭数据库
//             return;
//         }
//         if (doc != null) {
//             result.push(doc);   //放入结果数组
//         } else {
//             //遍历结束，没有更多的文档了
//             callback(null, result);
//             client.close(); //关闭数据库
//         }
//     });


// });
// }

//查找数据，找到所有数据。args是个对象{"pageamount":10,"page":10}
exports.find = function (collectionName, json, C, D) {
    var result = [];    //结果数组
    if (arguments.length == 3) {
        //那么参数C就是callback，参数D没有传。
        var callback = C;
        var skipnumber = 0;
        //数目限制
        var limit = 0;
    } else if (arguments.length == 4) {
        var callback = D;
        var args = C;
        //应该省略的条数
        var skipnumber = args.pageamount*args.page || 0;
        //数目限制
        var limit = args.pageamount || 0;
        //排序方式
        var sort = args.sort || {};
    } else {
        throw new Error("find函数的参数个数，必须是3个，或者4个。");
        return;
    }

    //连接数据库，连接之后查找所有
    _connectDB(function (err, client) {
        const setconnect=client.db(dbName);
        var cursor = setconnect.collection(collectionName).find(json).skip(skipnumber).limit(limit).sort(sort);
        cursor.each(function (err, doc) {
            if (err) {
                callback(err, null);
                client.close(); //关闭数据库
                return;
            }
            if (doc != null) {
                result.push(doc);   //放入结果数组
            } else {
                //遍历结束，没有更多的文档了
                callback(null, result);
                client.close(); //关闭数据库
            }
        });
    });
}


//删除操作
exports.deleteMany=function(collectionName,json,callback){
    _connectDB((err,client)=>{
        const setconnect=client.db(dbName);
        setconnect.collection(collectionName).deleteMany(
            json,
            (err,result)=>{
                callback(err,result);
                client.close();
            }

        )
    })
}

//更新操作
exports.updateMany=function(collectionName,json1,json2,callback){
    _connectDB((err,client)=>{
        const setconnect=client.db(dbName);
        setconnect.collection(collectionName).updateMany(json1,json2,(err,result)=>{
            callback(err,result);
            client.close();
        })
    })
}
//得到所有的数量
exports.getAllCount=function(collectionName,callback){
    _connectDB((err,client)=>{
        const setconnect=client.db(dbName);
        setconnect.collection(collectionName).countDocuments({}).then((count)=>{
            callback(count);
            client.close();
        });
    })
  
}

