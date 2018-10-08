var page=1;

$(".pagination-button:first").addClass("active");

//给class="pagination-button"添加监听事件
$(".pagination-button").click(function(){
    //重新发起请求即可
    page = parseInt($(this).attr("datapage"));
    console.log(page);
    getData(page);
    $(this).addClass("active").siblings().removeClass("active");
})

$(".next-btn").click(function(){
  page++;
  getData(page);
})
$(".previous-btn").click(function(){
    page--;
    getData(page);
    $(".pagination-button").addClass("active").siblings().removeClass("active");
})

getData(1);

function getData(page){

 //读取数据
 $.get("/du?page="+(page-1),(result)=>{
    // var json=JSON.parse(result);
     var compiled=_.template($("#list").html()); //读取模板
     //清空全部留言中的所有节点
     $("#allcomments").html("");
     for(var i=0;i<result.result.length;i++){
        var html=compiled({comments:result.result[i].comments,name:result.result[i].name,date:result.result[i].date,id:result.result[i]._id});
        $("#allcomments").append($(html));
     }
    
 })
}
//ajax提交表单
$("#submit").click(()=>{
   
    $.post("./comments",{
        "name":$("#inputName").val(),   //.val()函数返回选中或被设置的值
        "comments":$("#inputComments").val(),
        "date":new Date()
    },(result)=>{
        if(result.state==-1){
             $("#form-input-wrong").fadeIn();
        }else if(result.state==1){
            //提交成功，数据库已存取，当前无法显示
            $("#form-input-success").fadeIn();
            var compiled=_.template($("#list").html()); //读取模板
            var html=compiled({comments:$("#inputComments").val(),name:$("#inputName").val(),date:new Date()});
            $(html).insertBefore($("#allcomments"));
        }
    });
});
$(".delete").click(function(){
    $.get("/delete?id="+$(this).attr("data-id"),function(result){

    })
})
