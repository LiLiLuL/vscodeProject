import React from 'react';
import PCNewsImageBlock from '../pc_news_images_block';
import {Row,Col} from 'antd';
export default class International extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                    <PCNewsImageBlock count={30} type="guoji" width="100%" cartTitle="国际新闻" imageWidth="132px" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
                 
            </div>
        )
        
    }
}
