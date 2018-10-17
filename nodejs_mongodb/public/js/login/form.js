$("#regist_submit").click(function(){
    // $.post("/doregist",{
    //     "username":$("#username").val(),
    //     "password":$("#password").val()
    // },result=>{

    // })
    $.get("/doregist",{
        "username":$("#username").val(),
        "password":$("#password").val()
    },result=>{
        if(result==1){
            alert("注册成功");
        }else{
            alert("注册失败");
        }
    })
})



$("#login_submit").click(function(){
    $.post("/dologin",{
        "username":$("#username").val(),
        "password":$("#password").val()
    },result=>{
        if(result=="1"){
            alert("登录成功");
        }else if(result=="-1"){
            alert("登录失败")
        }else if(result=="-2"){
            alert("用户未注册")
        }
    })
})