import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Menu,Icon,Layout,Tabs,message, Modal,Form,Input,Button,Checkbox}from 'antd';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Now from './now';
import Nav from './nav';
const {Header,Footer,Sider,Content}=Layout;

 class PCIndex extends React.Component{
    constructor(){
        super();
       this.state={
           current:'headline',
           modalVisible:false,
           action:'login',
           hasLogined:false,
           useNickName:'',
           userid:0

       };

    }
    
    handleClick(e){
        if(e.key=="login"){
            this.setState({current:'login'});
            this.setModalVisible(true);
        }else{
            this.setState({current:e.key});
        }
    }
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    login(){
		this.setModalVisible(true);
	};
   handleSubmit(e){
       e.preventDefault();
       this.props.form.validateFields((err,values)=>{
          if(!err){
              console.log('Received valuse of form',values);
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
    + formData.r_confirmpassword, myFetchOptions)
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
   callback(key) {
    if (key == 1) {
        this.setState({action: 'login'});
    } else if (key == 2) {
        this.setState({action: 'register'});
    }
};

    render(){
        const {getFieldDecorator} =this.props.form;
        const userShow=this.state.hasLogined
        ?
        <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.useNickName}</Button>&nbsp;&nbsp;
        <Link target="_blank" to="/usercenter"><Button type="dashed" htmlType="button">个人中心 </Button>&nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button></Link>
        </Menu.Item>
        :
        <Menu.Item key="login" class="register">
        <Icon type="appstore" />注册/登录
        </Menu.Item>;
        return(
            <Router>
                <Layout>
            <Header> 
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                    <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                    <Menu.Item key="headline">
                         <Icon type="appstore" />头条
                     </Menu.Item>
                     <Menu.Item  key="entertrainment">
                         <Icon type="appstore" />娱乐
                     </Menu.Item>
                     <Menu.Item  key="real-time">
                         <Link  to="/now">
                         <span><Icon type="appstore" /></span><span>实时</span>
				     	</Link>
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
                    okText="关闭" >
                     <Tabs type="card"  onChange={this.callback.bind(this)}>
                     <TabPane tab="登录" key="1">
                     <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="login-form">
                     <FormItem>
                     {getFieldDecorator('userName', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                     })(
                       <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                     )}
                     </FormItem>
                     <FormItem>
                     {getFieldDecorator('password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                     })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                     )}
                     </FormItem>
                     <FormItem>
                      {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                      initialValue: true,
                     })(
                        <Checkbox>Remember me</Checkbox>
                      )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          Log in
                        </Button>
                       Or <a href="">register now!</a>
                     </FormItem>
                     </Form>
                     </TabPane>
                     <TabPane tab="注册" key="2">
                     <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="login-form">
                     <FormItem>
                     {getFieldDecorator('r_userName', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                     })(
                       <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                     )}
                     </FormItem>
                     <FormItem>
                     {getFieldDecorator('r_password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                     })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                     )}
                     </FormItem>
                     <FormItem>
                     {getFieldDecorator('r_confirmpassword', {
                           rules: [{ required: true, message: 'Please confirm your Password!' }],
                     })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                     )}
                     </FormItem>
                     <Button type="primary" htmlType="submit" > register</Button>
                     </Form>
                     </TabPane>
                     
                     </Tabs>
                    </Modal>

                    </Col>
             
                    <Col span={2}></Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
       <Route exact path="/" component={Nav } />
       <Route path="/now" component={ Now } />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
            </Layout>
            </Router>

        );
    };
}

const WrappedPCHeader=Form.create()(PCIndex);

export default WrappedPCHeader;
