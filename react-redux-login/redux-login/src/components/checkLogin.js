import React from 'react';
import {withRouter} from 'react-router';
@withRouter
 class CheckLogin extends React.Component{
     componentDidMount(){

        if(window.location.pathname==='/login'||window.location.pathname==="/register") {
            return;
        }
         //在这里请求相关接口判断用户是否完成登录
         fetch(`/user/info`,{   //Fetch方法
         method: 'GET',
         headers: {'Content-Type': 'application/json; charset=utf-8'},
         }).then(res => res.json()).then( json => {
             let a=json;
             console.log(json);
          if(a.code===0){
            this.props.getUserInfo(a.data)
          }else{
              console.log("跳转至登录页面");
           this.props.history.push('/login');
          }
         }
     );
      }
      render(){
          return null;
      }
}

export default  CheckLogin;