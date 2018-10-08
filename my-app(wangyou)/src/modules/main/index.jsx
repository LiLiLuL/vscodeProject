import React, { Component } from 'react';
import { observable, observer } from "mobx-react";
import { Switch, Route } from 'react-router-dom';

import Headerbar from './headerbar';
import Leftsider from './Leftsider';
import { Layout, Menu, Icon, Button } from 'antd';

import ViewStore from '../../stores/viewStore';


import companyInfo from '../baseInfo/companyInfo';

import document from '../document/document';

const { Header, Sider, Content, } = Layout;

@observer // 给这个页面添加observable装饰器
class Main extends Component {
    constructor(props) {
        super(props);
    };
    onClick = () => {
        console.log(ViewStore.todos);
        ViewStore.setTodos(ViewStore.todos)
    }
    render() {
        return (
            <Layout style={{ 'height': '100%' }}>
                <Headerbar />
                <Layout style={{ 'height': '100%' }}>
                    <Leftsider />
                    <Layout style={{ padding: '0 24px 24px', height: '100%' }}>

                            <Switch>
                                <Route path="/main/baseInfo/companyInfo" exact component={companyInfo} />
                                <Route path="/main/document/document" exact component={document} />
                            </Switch>

                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
export default Main;