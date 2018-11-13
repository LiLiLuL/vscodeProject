import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row,Col,Menu,Icon,Tabs,message, Modal,Form,Input,Button,Checkbox, Layout}from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import PCNewsContainer from './pc_newsContainer';
import Now from './page/now';
import Game from './page/game';
import Fashion from './page/fashion';
import Socilty from './page/socilty';
import Sport  from './page/sport';
import International from './page/international';
import Entertrainment from './page/entertrainment';
import LoginForm from './loginForm/login';
import RegiterForm from './loginForm/register';

const {Header,Footer,Sider,Content}=Layout;
const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;
const TabPane=Tabs.TabPane;
 function hasErrors(fieldsError){
     return Object.keys(fieldsError).some(field=>fieldsError[field]);
 }


 class PCIndex extends React.Component{
    constructor(props){
        super(props);
       this.state={
           current:'headline', //导航栏选中
           modalVisible:false, //模块是否隐藏
           action:'login',   //所做的动作
           hasLogined:false,  //是否已登录
           useNickName:'',   //登录名，一般设置为空
           userid:0,
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
           method:"POST"
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
        return (
            <Router>
                <Layout>
               <Header className="fixheader">
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
                         <Link to="/"><span><Icon type="appstore" />头条</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="entertrainment">
                     <Link to="/entertrainment"><span><Icon type="appstore" />娱乐</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="real-time">
                     <Link to="/now"><span><Icon type="appstore" />实时</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="game">
                     <Link to="/game"><span><Icon type="appstore" />游戏</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="socilty">
                     <Link to="/socilty"><span><Icon type="appstore" />社会</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="international">
                     <Link to="/international"><span><Icon type="appstore" />国际</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="sport">
                     <Link to="/sport"><span><Icon type="appstore" />体育</span></Link>
                     </Menu.Item>
                     <Menu.Item  key="fashion">
                     <Link to="/fashion"><span><Icon type="appstore" />时尚</span></Link>
                     </Menu.Item>
                     {userShow}
                </Menu>
              

                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                    onCancel={()=>this.setModalVisible(false) }
                    onOk={()=>this.setModalVisible(false)}
                    okText="关闭"
                    >
                       <Tabs type="card" onChange={this.callback.bind(this)}>
                          <TabPane tab="登录" key="1"><LoginForm/></TabPane>
                          <TabPane tab="注册" key="2">wwwwww</TabPane>
                       </Tabs>
                    </Modal>
                 </Col>
                    <Col span={2}></Col>
                </Row>
                </Header>
             <Content>
             <Route exact path="/" component={PCNewsContainer } />
             <Route path="/now" component={ Now } />
             <Route path="/game" component={ Game } />
             <Route path="/fashion" component={ Fashion } />
             <Route path="/socilty" component={ Socilty } />
             <Route path="/international" component={ International } />
             <Route path="/entertrainment" component={ Entertrainment } />
             <Route path="/sport" component={ Sport } />
             </Content>           
            <Footer>
                <PCFooter/>
            </Footer>
            </Layout>
            </Router>
        );
    };
}
const WrappedPCHeader=Form.create()(PCIndex);

export default WrappedPCHeader;