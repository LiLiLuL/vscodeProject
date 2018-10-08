import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Button, Modal } from 'antd';
import ToggleSidebarButton from './toggleSidebarButton';
import {observable } from 'mobx-react';

const {Header, Content, Sider} = Layout;

class Headerbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header className="header">
                <div className="logo" style={{ float: "left", color: "#fff", fontSize: '22px', WebkitUserSelect: 'none', userSelect: 'none' }}>
                    <span>鲲鹏生产制造执行系统软件 V2.0</span>
                </div>
                <ToggleSidebarButton/>
            </Header>
        )
    }
}
export default Headerbar;