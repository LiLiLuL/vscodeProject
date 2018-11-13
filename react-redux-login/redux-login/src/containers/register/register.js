import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

  @connect(
    state=>state,
    {register}
  )
 class Register extends React.Component{
    constructor(props){
      super(props);
      this.sate={
        username:'',
        pwd:'',
        pwdConfirm:'',
        type:'worker' //用户类型
      }
    }
    componentDidMount() {
        this.props.form.validateFields();
      } 
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      handleRegister(){
        console.log("register start");
        this.props.register(this.state);
        console.log("register over");
      }
      handleChange=(key,value)=>{
        this.setState({
          [key]:value
        })
      }
      handleGoLogin=()=>{
        this.props.history.push('/login');
      }
    render(){
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
          <div  className="loginbox">
            <Form  onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input  onChange={value=>{this.handleChange('username',value)}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input onChange={value=>{this.handleChange('password',value)}}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password-confirm', {
                rules: [{ required: true, message: 'Please confirm your Password!' }],
              })(
                <Input  onChange={value=>{this.handleChange('passwordConfirm',value)}}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                onClick={()=>this.handleRegister()}
              >
                Register
              </Button>
              <Button
                type="primary"
                htmlType="submit"
               
                onClick={this.handleGoLogin}
              >
                have done a number,go to Login
              </Button>
            </FormItem>
          </Form>
          {this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}></Redirect>:null} 
            <div className="err-show">{this.props.user.msg ? this.props.user.msg : ''}</div>
          </div>
        )
    }
   
}

const RegisterForm = Form.create()(Register);
export default RegisterForm;