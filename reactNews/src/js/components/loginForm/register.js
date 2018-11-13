import React from 'react';
import {Form,Button} from 'antd';
const FormItem=Form.Item;
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:'',
        }
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const {getFieldDecorator,getFieldError,getFieldsError,isFieldTouched}=this.props.form;
        const {onCancel,visible,onCreat}=this.props;
        const userNameError=isFieldTouched('userName')&&getFieldError('userName');
        const passwordError=isFieldTouched('password')&&getFieldError('password');
        return (
            <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
            <FormItem label="account" 
              validateStatus={userNameError ? 'error':''}
              help={userNameError||''}
            >
              {getFieldDecorator('r_userName',{
                  rules:[{required:true,message:'请输入账号名称'}]
              })(
                  <Input  placeholder="userName" {...getFieldDecorator('r_userName')}/>
              )}
            </FormItem>
            <FormItem  label="password"
             validateStatus={passwordError ? 'error' : ''}
             help={passwordError || ''}
            >
            {getFieldDecorator('r_password',{
                  rules:[{required:true,message:'请输入您的密码'}]
              })(
                  <Input type="password" placeholder="password" />
              )}
              
            </FormItem>
            <FormItem label="password_agin" 
             validateStatus={passwordError ? 'error' : ''}
           help={passwordError || ''}

            >
            {getFieldDecorator('r_confirmPassword',{
                  rules:[{required:true,message:'请输入您的密码'}]
              })(
                  <Input type="password"  placeholder="confirmPassword"/>
              )}
            </FormItem>
            {/* <Button type="primary" htmlType="submit"  disabled={hasErrors(getFieldsError())}> 注册 </Button> */}
            <Button type="primary" htmlType="submit" > 注册 </Button>

           
            </Form>
        )
    }
}


const RegisterForm=Form.create()(Register);
export default RegisterForm;