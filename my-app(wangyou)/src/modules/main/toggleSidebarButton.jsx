import React, { Component } from 'react';
import { observable, observer } from "mobx-react";
import {Button,Icon} from 'antd';
import ViewStore from '../../stores/viewStore';

@observer // 给这个页面添加observable装饰器
class ToggleSidebarButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Button type="primary" onClick={() => { ViewStore.setCollapsed() }}
                style={{ float: "left", 'marginLeft': '50px', 'marginTop': '15px' }}>
                <Icon type={ViewStore.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
        )
    }
}
export default ToggleSidebarButton;