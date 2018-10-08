const path=require('path');
module.exports={
    entry:'./src/js/index.js',
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
        port:3000,
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