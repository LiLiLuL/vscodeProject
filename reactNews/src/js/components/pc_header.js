import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Menu,Icon,Tabs,message, Modal,Form,Input,Button,Checkbox,Link}from 'antd';


const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;
const TabPane=Tabs.TabPane;
 function hasErrors(fieldsError){
     return Object.keys(fieldsError).some(field=>fieldsError[field]);
 }

 class PCHeader extends React.Component{
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
    // componentWillMount(){
    //     if(localStorage.userid!=''){
    //         this.setState({hasLogined:true});
    //         this.setState({userNickName:localStorage.useNickName,userid:localStorage.userid})
    //     }
    // }
    componentDidMount(){
        //在最初的时候使注册的按钮不可用
      //  this.props.form.validateFields();
    }

    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleClick(e){
       if(e.key=="register"){
           this.setState({current:'register'});
           this.setModalVisible(true);
       }else{
           this.setState({current:e.key});
       }
    };
   
 handleSubmit(e){
       e.preventDefault();
       console.log(this);
     this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
       var myFetchOptions={
           method:"GET"
       };
       var formData=this.props.form.validateFields();
       console.log("formData"+formData);
       fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
       + "&username="+formData.userName+"&password="+formData.password
       +"&r_userName=" + formData.r_userName + "&r_password="
       + formData.r_password + "&r_confirmPassword="
       + formData.r_confirmPassword, myFetchOptions)
       .then(response => response.json())
       .then(json => {
           this.setState({userNickName: json.NickUserName, userid: json.UserId});
       });
       if (this.state.action=="login") {
        this.setState({hasLogined:true});
       }
       message.success("请求成功");
       this.setModalVisible(false);
      
    } 
    login(){
		this.setModalVisible(true);
	};

    callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
    render(){
        const {getFieldDecorator,getFieldError,getFieldsError,isFieldTouched}=this.props.form;
        const {onCancel,visible,onCreat}=this.props;
        const userNameError=isFieldTouched('userName')&&getFieldError('userName');
        const passwordError=isFieldTouched('password')&&getFieldError('password');
        const userShow=this.state.hasLogined
        ?
        <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.useNickName}</Button>&nbsp;&nbsp;
        <Link target="_blank" to="/usercenter"><Button type="dashed" htmlType="button">个人中心 </Button>&nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button></Link>
        </Menu.Item>:
        <Menu.Item key="register" class="register">
        <Icon type="appstore" />注册/登录
        </Menu.Item>;
        
    
        return(
            <header>
        
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                       <a href="/" class="logo">
                         <img src="./src/images/logo.png" alt="logo" />
                         <span>ReactNews</span>
                       </a>
                    </Col>
                    <Col span={16}>
                
                   
                    <Menu mode="horizontal"  onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                     <Menu.Item key="headline">
                         <Icon type="appstore" />头条
                     </Menu.Item>
                     <Menu.Item  key="entertrainment">
                         <Icon type="appstore" />娱乐
                     </Menu.Item>
                     <Menu.Item  key="real-time">
                         <Icon type="appstore" />
                     </Menu.Item>
                     <Menu.Item  key="game">
                         <Icon type="appstore" />游戏
                     </Menu.Item>
                     <Menu.Item  key="socilty">
                         <Icon type="appstore" />社会
                     </Menu.Item>
                     <Menu.Item  key="international">
                         <Icon type="appstore" />国际
                     </Menu.Item>
                     <Menu.Item  key="sport">
                         <Icon type="appstore" />体育
                     </Menu.Item>
                     <Menu.Item  key="fashion">
                         <Icon type="appstore" />时尚
                     </Menu.Item>
                     {userShow}
                    </Menu>
              

                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                    onCancel={()=>this.setModalVisible(false) }
                    onOk={()=>this.setModalVisible(false)}
                    okText="关闭"
                    >
                     <Tabs type="card" onChange={this.callback.bind(this)}>
                     <TabPane tab="登录" key="1">
						<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="账户">
								<Input placeholder="请输入您的账号" {...getFieldDecorator('userName')}/>
							</FormItem>
							<FormItem label="密码">
								<Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('password')}/>
							</FormItem>
								<Button type="primary" htmlType="submit">登录</Button>
						</Form>
					</TabPane>

                      <TabPane tab="注册" key="2">
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
                      </TabPane>
                     </Tabs>
                    </Modal>
                 </Col>
                    <Col span={2}></Col>
                </Row>

            </header>
           

        );
    };
}
const WrappedPCHeader=Form.create()(PCHeader);

export default WrappedPCHeader;