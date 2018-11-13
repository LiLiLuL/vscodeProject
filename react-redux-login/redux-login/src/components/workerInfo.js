import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {loginOut} from '../../redux/user.redux'

@connect(
    state => state,
    {loginOut}
)

class WorkerInfo extends Component {
    render() {
        return (
            <div>
                {this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}></Redirect>:null}
                <h3>worker信息页面</h3>
                <p>用户名称:{this.props.user.username} </p>
                <p>用户类型:{this.props.user.type} </p>
                <WingBlank>
                    <Button onClick={this.handleLoginOut.bind(this)} type="primary">退出登录</Button>
                </WingBlank>
            </div>
        );
    }
    /*
    *   退出登录
    * */
    handleLoginOut() {
        this.props.loginOut();
    }
}

export default WorkerInfo;

