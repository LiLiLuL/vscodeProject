import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Menu,Icon,Tabs,message, Modal,Form,Input,Button,Checkbox}from 'antd';


const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;

const TabPane=Tabs.TabPane;
function hasErrors(fieldsError){
    return Object.keys(fieldsError).some(field=>fieldsError[field]);
}


 class Mobileheader extends React.Component{
    constructor(){
        super();
       this.state={
           current:'headline', //导航栏选中
           modalVisible:false, //模块是否隐藏
           action:'login',   //所做的动作
           hasLogined:false,  //是否已登录
           useNickName:'',   //登录名，一般设置为空
           userid:0
       };

    };
    componentDidMount(){
        //在最初的时候使注册的按钮不可用
        this.props.form.validateFields();
    }

    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleClick(e){
       if(e.key=="login"){
           this.setState({current:'login'});
           this.setModalVisible(true);
       }else{
           this.setState({current:e.key});
       }
    };
   
 handleSubmit(e){
       e.preventDefault();
       console.log('test');
       console.log(this);
      var formData=this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
       var myFetchOptions={
           method:"GET"
       };
       console.log(formData);
       fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
       + "&username="+formData.userName+"&password="+formData.password
       +"&userName=" + formData.userName + "&confirmPassword=" + formData.r_confirmPassword, myFetchOptions);
       then(response=>response.json()).then(
           json=>{
               this.setState({
                   useNickName:json.NickUserName,userid:json.UserId
               });
           }
       );
       message.success("请求成功");
       this.setModalVisible(false);
    } 
    callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
    login(){
       this.setModalVisible(true);
    }
   
    render(){
        const {getFieldDecorator,getFieldError,getFieldsError,isFieldTouched}=this.props.form;
        const {onCancel,visible,onCreat}=this.props;
        const userNameError=isFieldTouched('userName')&&getFieldError('userName');
        const passwordError=isFieldTouched('password')&&getFieldError('password');
        const userShow=this.state.hasLogined
        ?<link > <Icon type="index" /></link>
        :<Icon type="setting" onClick={this.login.bind(this)}/>
        return(
            <div id="mobile-header">
            <header> 
                <img src="./src/images/logo.png" alt="logo" />
                <span>ReactNews</span>
                {userShow}
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
        onCancel={()=>this.setModalVisible(false) }
        onOk={()=>this.setModalVisible(false)}
        okText="关闭"
        >
         <Tabs type="card">
          <TabPane tab="注册" key="2">
             <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
             <FormItem label="account" 
               validateStatus={userNameError ? 'error':''}
               help={userNameError||''}
             >
               {getFieldDecorator('userName',{
                   rules:[{required:true,message:'请输入账号名称'}]
               })(
                   <Input  placeholder="userName"/>
               )}
             </FormItem>
             <FormItem  label="password"
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
             >
             {getFieldDecorator('password',{
                   rules:[{required:true,message:'请输入您的密码'}]
               })(
                   <Input type="password" placeholder="password"/>
               )}
               
             </FormItem>
             <FormItem label="password_agin" 
              validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}

             >
             {getFieldDecorator('confirmPassword',{
                   rules:[{required:true,message:'请输入您的密码'}]
               })(
                   <Input type="password"  placeholder="confirmPassword"/>
               )}
             </FormItem>
             <Button type="primary" htmlType="submit"  disabled={hasErrors(getFieldsError())}> 注册 </Button>
             </Form>
          </TabPane>
         </Tabs>
        </Modal>
            </header>
            </div>
           
        );
    };
}

const ModalHeader=Form.create()(Mobileheader);
export default ModalHeader;

