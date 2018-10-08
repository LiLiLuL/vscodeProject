import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Menu,Icon,Tabs,message, Modal,Form,Input,Button,Checkbox}from 'antd';
const TabPane=Tabs.TabPane;
export default class Mobilecenter extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                    <Tabs>
                         <TabPane tab="我的收藏列表" key={1}></TabPane>
                         <TabPane tab="我的评论列表" key={2}></TabPane>
                         <TabPane tab="头像设置" key={3}></TabPane>
                    </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            
            </div>
        )
    }
   
}