requirejs.config({
    //模块所在目录
    baseUrl: "../static",
    paths: {
        'jquery':'js/jquery',
        //开源插件
        'template': 'plugs/art-template/lib/template-web',
        'underscore':'plugs/underscore/underscore',
        'ELEMENT':'plugs/element-ui/lib/index',
        'layui':'plugs/layui-src/src/layui',
        //vue一定要小写才有用
        'vue':'plugs/vue/dist/vue',
        'text': 'js/text',      
    },
    shim:{
       'ELEMENT':{
           deps:['vue']
       }
      }
});

// // 开始逻辑.
requirejs(['jquery','underscore','template','../static/js/index.js','vue','text','ELEMENT'],
function   ($,_,template,index,Vue,text,ELEMENT) {

    index.init();  
    require(['text!../htmls/login.html','text!../htmls/menu.html'], function(entry,menu) { 
        console.log("aaa");                      
        $('#login').html(entry); 
        $('#menu-nav').html(menu);
    });

});