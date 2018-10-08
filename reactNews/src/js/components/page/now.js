import React from 'react';
import Nowfetch from './now_fetch';
import {Row,Col}from 'antd';
export default class Now extends React.Component{
  
    render(){
        return (
        <Row>
            <Col span={2}></Col>
            <Col span={20}>
            < h1>this is the Now Page</h1>;
            <Nowfetch />
            </Col>
            <Col span={2}></Col>
        </Row>
        )
           
        
    }
}
