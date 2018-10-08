import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';
import {Layout,Menu,Breadcrumb} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Nav1 from './components/nav1';
import Nav2 from './components/nav2';
import Nav3 from './components/nav3';
const {Header,Footer,Sider,Content}=Layout;

class App extends Component {
  render() {
    return (
     <Router>
       <Layout className="layout">
       <Header>
         <div className="logo"></div>
         <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
        <Link to='/'>nav 1</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to='/nav2'>nav 2</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to='/nav3'>nav 3</Link>
        </Menu.Item>
      </Menu>
       </Header>
       <Content style={{ padding: '0 50px' }}>
       <Route exact path="/" component={ Nav1 } />
       <Route path="/nav2" component={ Nav2 } />
       <Route path="/nav3" component={ Nav3 } />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
       </Layout>
     </Router>
    );
  }
}

export default App;
