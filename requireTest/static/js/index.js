
define(['underscore','template'],function(_,template){
    function init(){
        $.ajax({
            type:'GET',
            url:"http://ic.snssdk.com/2/article/v25/stream/",
            dataType:"jsonp",
            success:function(res){
                   var data=res.data;
                   var str='';
                   _.each(data,function(d){
                       str+= template('table-demo',{
                           item:d.abstract,
                           url:d.article_url
                       })
                   })
                   $("#app-template-first").html(str);
            },      
    });
        
    }

    return {
        init:init
    }
        

})