import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {login} from '../../redux/user.redux';
import {connect} from 'react-redux';
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16, offset: 4 },
};
const FormItem = Form.Item;
@connect (
    state => state,
    {login}
)

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      yyy:this.props
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
      handleRegister=()=>{
        this.props.history.push('/register');
      }
      handleLogin=()=>{
       this.props.login(this.state);
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
              {...formTailLayout}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
              {...formTailLayout}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem {...formTailLayout} >
              <Button
                type="primary"
                htmlType="submit"
                className="btn"
                onClick={this.handleLogin}
              >
                Log in
              </Button>
              <Button
                type="primary"
                onClick={this.handleRegister}
                className="btn"
              >
                  register
              </Button>
            </FormItem>
          </Form>
          </div>
        )
    }
   
}

const LoginForm = Form.create()(Login);
export default LoginForm;
