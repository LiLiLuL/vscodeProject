import React from 'react';
import {Row,Col,Menu,Icon}from 'antd';

class Now extends React.Component{
    render(){
        return(
            <header> 
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        this the now page
                    </Col>
             
                    <Col span={2}></Col>
                </Row>
            </header>
           

        );
    };
}
export default Now;