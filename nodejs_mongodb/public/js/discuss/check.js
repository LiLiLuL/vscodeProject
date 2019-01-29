$(function() {
    //登录界面账户输入框失去焦点
    //用户名的正则验证
    (function login_validate() {
        $('.username').blur(function(){
            let reg=/^[A-Za-z0-9_-]{3,16}$/g;
            console.log($(this));
            let ff=$(this).val();

            let f= $('.username').val();
            console.log(f);
            // console.log("test"+ff);
              //  if(f==''){
              //    console.log("用户名不能为空")
              //   $('.username').next().html('用户名不能为空');
              //  }
            if($(this).val()==''){
               $(this).addClass('errorInput');
               console.log("用户名为空")
               $(this).next().css("display","block").html('用户名不能为空');
               return;
            }else if(!reg.test(f)){
                $(this).addClass('errorInput');
                $(this).next().css("display","block").html('用户名必须包含大小写字母、数字、下划线');
                return;
            }else{
                $(this).next().empty();
                $(this).removeClass('errorInput');
            }
        });
       
      //密码的正则验证
        $('.password').blur(function(){
            let reg=/^[A-Z][a-z0-9_-]{7,16}$/g;

            if($(this).val()==''){
               $(this).addClass('errorInput');
               console.log("用户名为空")
               $(this).next().css("display","block").html('密码不能为空');
               return;
            }else if(!reg.test($(this).val())){
                $(this).addClass('errorInput');
                $(this).next().css("display","block").html('密码必须以大写字母开头，包含大小写，数字、下划线，8-16位密码');
                return;
            }else{
                $(this).next().empty();
                $(this).removeClass('errorInput');
            }
        });
        //确认密码的验证
        $('.checkpassword').blur(function(){
            let reg=/^[A-Z][a-z0-9_-]{7,16}$/g;

            if($(this).val()==''){
               $(this).addClass('errorInput');
               console.log("用户名为空")
               $(this).next().css("display","block").html('确认密码不能为空');
               return;
            }else if($(this).val()!=$(".password").val()){
                $(this).addClass('errorInput');
                $(this).next().css("display","block").html('两次密码不一致');
                return;
            }else{
                $(this).next().empty();
                $(this).removeClass('errorInput');
            }
        });
        $(".username").focus(function(){
            $(".username").next().empty();
          });
        $(".password").focus(function(){
            $(".password").next().empty();
          });
    })();
})