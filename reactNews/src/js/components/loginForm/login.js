import React from 'react';
import {Form,Input,Button}from 'antd';
const FormItem=Form.Item;

class Login extends React.Component{
    handleSubmit (e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',

        };
        this.userChange=this.userChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.submit=this.submit.bind(this);
        this.getConnect=this.getConnect.bind(this);
    }

    userChange(e){
        this.setState({userName:e.target.value})
    }
    passwordChange(e){
        this.setState({password:e.target.value})
    }
    submit(){
        window.alert("用户名"+this.state.userName);
        window.alert("密码"+this.state.password);
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let text = {userName:this.state.userName,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:3000/password`,{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json()).then(
            data => {
                console.log(data);
                if(data.success){
                     window.alert('验证成功，欢迎登陆');
                }else{
                    window.alert('用户名或密码错误');
                }
            }
        )
    }
    
    
    render(){
        const {getFieldDecorator}=this.props.form;
        let that=this;
        const {onCancel,visible,onSubmit}=that.props;
        const state=this.state;
        return(
            <Form horizontal onSubmit={(e)=>{this.handleSubmit(e)} } >
                <FormItem>
                    {getFieldDecorator('userName',{
                        rules:[{required:true,message:'please input your username'}],
                    })(
                        <Input  name="userName" onChange={this.userChange} placeholder="请输入您的账号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:'please input your password'}],
                    })(
                        <Input  name="password" type="password" onChange={this.userChange} placeholder="请输入您的账号" />
                    )}
                </FormItem>
                

				{/* <FormItem label="账户">
					<Input  name="userName" onChange={this.userChange} placeholder="请输入您的账号" {...getFieldDecorator('userName')}/>
				</FormItem>
				<FormItem label="密码">
					<Input   name="password" onChange={this.passwordChange} type="password" placeholder="请输入您的密码" {...getFieldDecorator('password')}/>
				</FormItem> */}
				<Button type="primary" htmlType="submit" onClick={this.submit}>登录</Button>
                <Button type="default">重置</Button>
			</Form>
            
        )
    }
}
const LoginForm=Form.create()(Login);
export default LoginForm;