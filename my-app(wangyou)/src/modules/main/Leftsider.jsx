import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, } from 'antd';
import ViewStore from '../../stores/viewStore';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

@observer
class Leftsider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenuKey: [],
            menuData: [
                {
                    "title": "基础资料管理",
                    "icon": "user",
                    "key": "baseInfo",
                    "url": "",
                    "children": [{
                        "title": "公司信息",
                        "key": "companyInfo",
                        "url": "/main/baseInfo/companyInfo",
                    }]
                },
                {
                    "title": "文档管理",
                    "icon": "book",
                    "key": "docment",
                    "url": "",
                    "children": [
                        {
                            "title": "文档管理",
                            "key": "document",
                            "url": "/main/document/document",
                        }
                    ]
                },
                
            ]
        }
    }

    //生成菜单
    getMenu(dataSource) {
        return (
            dataSource.map((menu, index) => {
                console.log(menu, index);
                if (menu.children) {
                    return (
                        <SubMenu
                            key={menu.key}
                            title={
                                <span>
                                    <Icon type={menu.icon} />
                                    <span>{menu.title}</span>
                                </span>
                            }>
                            {this.getMenu(menu.children)}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={menu.key}>
                            {menu.title}
                            <Link to={menu.url}>{menu.title}</Link>
                        </Menu.Item>
                    )
                }
            })
        )
    }
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={ViewStore.collapsed} style={{ overflowY: 'auto', height: "100%" }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['companyInfo']} defaultOpenKeys={['baseInfo']}>
                    {this.getMenu(this.state.menuData)}
                </Menu>
            </Sider>
        )
    }
}
export default Leftsider;