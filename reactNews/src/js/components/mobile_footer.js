import React from 'react';
import {Row,Col,Menu,Icon}from 'antd';

export default class  Mobilefooter extends React.Component{
    constructor(){
        super();
       this.state={
           current:'headline'

       };

    }
    render(){
        return(
            <header> 
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2018React 新闻网页实战@Chenxq 
                    </Col>
             
                    <Col span={2}></Col>
                </Row>

            </header>
           

        );
    };
}