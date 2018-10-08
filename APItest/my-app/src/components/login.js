import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import PropTypes from 'proptype';

const FormItem = Form.Item;

 class Login extends React.Component{
     constructor(){
         super();
     }
     handleSubmit(e){
         e.preventDefault();
         let data=this.props.form.getFieldsValue();
         let history=this.context.router.history;
     }
    render(){
        const  {getFieldDecorator}=this.props.form;
      return (
          <div>
              <Form onSubmit={(e)=>this.handleSubmit(e) } >
              <FormItem>
                        {
                            getFieldDecorator(
                                'userName',{
                                    rules:[{required: true, message:'姓名不能为空！'}],
                                }
                            )(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )
                        } 
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator(
                                "password",{
                                    rules:[{required: true, message:"密码不能为空！"}]
                                }
                            )(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )
                        }
 
 
                    </FormItem>
                    <FormItem>
 
                            <Checkbox>Remember me</Checkbox>
 
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
              </Form>
          </div>
      )
    }
}


    
 
 
 
// Login.contextTypes = {
//     router: PropTypes.object.isRequired,
// };
let LoginForm= Form.create()(Login);
export default LoginForm;
