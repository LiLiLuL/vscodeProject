
$("input").focus(()=>{
    $("#form-input-wrong").fadeOut();
})
$("#btn-register").click(function(){
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

$("#btn-login").click(function(){
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
