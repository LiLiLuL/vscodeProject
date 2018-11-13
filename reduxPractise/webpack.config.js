var path =require('path');
module.exports = {
    //入口文件
    entry:'./index.js',
    //出口文件
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:1718
    }
}