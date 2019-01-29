
$("input").focus(()=>{
    $("#form-input-wrong").fadeOut();
})

//注册按钮
$("#btn-register").click(function(event){
    event.preventDefault();
    //trim()方法用于去除两端的空白
    if($("#InputUsername").val().trim().length<1){
        console.log('用户名不允许为空');
        $("#InputUsername").focus();
        return;
    }

    $.post("/doregister",{
        "username":$("#InputUsername").val(),
        "password":$("#InputPassword").val(),
    },result=>{
        if(result=="1"){
            //注册成功,写入senssion
           alert("注册成功，即将跳转至首页...")
            window.location="/";
        }else if(result=="-1"){
            //注册失败，用户名被占用
            $("#form-input-wrong").fadeIn();
        }else if(result=="-3"){
            //服务器错误
        }    
    })
})
//登录的按钮
$("#btn-login").click(function(event){

    $.post("/dologin",{
        "username":$("#InputUsername").val(),
        "password":$("#InputPassword").val(),
    },result=>{
        if(result=="1"){
            //登录成功,写入senssion
           alert("登录成功，即将跳转至首页...")
            window.location="/";
        }else if(result=="-1"){
            //登录失败，用户名不存在
            $("#form-input-wrong").fadeIn();
            $("#form-input-wrong").html("用户名不存在");
        }else if(result=="-2"){
            //密码错误
            $("#form-input-wrong").fadeIn();
            $("#form-input-wrong").html("密码错误");
        }    
    })
})

$("#btn").click(function(){
    console.log('剪裁');
    var w = parseInt($(".jcrop-holder>div:first").css("width"));
    var h = parseInt($(".jcrop-holder>div:first").css("height"));
    var x =parseInt( $(".jcrop-holder>div:first").css("left"));
    var y =parseInt( $(".jcrop-holder>div:first").css("top"));
    $.get("/doimagecut",{
      "w":w,
      "h":h,
      "x":x,
      "y":y
    },result=>{
        console.log(result);
      if(result=="1"){
        alert("改名成功");
        window.location="/";
      }
    })
  });
  
//发表说说的按钮
  $("#btn-publish").click(function(){
      $.post('/doPublish',{
          "content":$("#content").val()
      },result=>{
          if(result=="1"){
              alert("发布成功");
          }else{
              alert("发布失败");
          }
      })
  })

  //读取说说
  var compiled=_.template($("#allcontents").html()); //读取模板
  var $allmoments=$("#allmoments");
   //外键是从一个表中调用另外一个表的时候需要的
   getPage(0);
   function getPage(page){
     //清空全部说说中的所有节点
    $("#allmoments").html("");
  $.ajax({
      "url":"/allmoments?page="+page,
      "type":"get",
      "async":false, 
     "success":function(result){
        iterator(0);
        function iterator(i){
            if(i==result.length){
                //在这里做请求完毕的事情
                return;
            }
            $.ajax({
                "url":"/userinfo?username="+result[i].username+ "&" + new Date(),
                "type":"get",
                "async":false,
                "success":function(result2){
                    result[i].avatar=result2.avatar;
                    //组装模板
                    var html=compiled(result[i]);
                    $("#allmoments").append($(html));
                   iterator(i+1);
                }
            })
            // $.get("/userinfo?username="+result[i].username,result2=>{
            //   result[i].avatar=result2.avatar;
            //   //组装模板
            //   var html=compiled(result[i]);
            //   $("#allmoments").append($(html));
            //  iterator(i+1);
            // })
          
        };
    }
   
  })
}


$.get("/allcount",function(result){
    let amount=parseInt(result);
    pageamount=Math.ceil(amount/12);
    for(let i=0;i<pageamount;i++){
        $('.paginationlist').append("<li><a href='javascript:void(0)'>"+i+"</a></li>");
    }
    //监听
    
    $('.paginationlist li').click(function(){
       let page=$(this).index();
       getPage(page);
       $(this).addClass("pageactive").siblings().removeClass("pageactive");
    })

})

//更改密码
$("#btn-check-password").click(function(event){
    event.preventDefault();
    $.post("/doforgetpassword",{
        "username":$("#username").val(),
        "new-password":$("#new-password").val(),
        "confirm-password":$("#confirm-new-password").val()
    },result=>{
        if(result=="1"){
            //更改密码成功
            window.location="/login";
        }else if(result=="-1"){
            //注册失败，用户名被占用
            $("#form-input-wrong").fadeIn();
        }else if(result=="-3"){
            //服务器错误
            alert('服务器错误');
        }else if(result=="-4"){
            //两次密码不一致
            alert("两次密码不一致");
        }    
    })
})
  






