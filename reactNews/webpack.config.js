const path=require('path');
var proxy=require('http-proxy-middleware');
const context=[`/api`,`/login`]
module.exports={
    entry:'./src/js/root.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/'
        // path:path.resolve(__dirname,'dist'),
        // filename:"./src/bundle.js"
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:1717,
        proxy: [
            {
              context: context,
              target: 'http://ic.snssdk.com',
              changeOrigin: true,
              secure: false
            }
        ]

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}