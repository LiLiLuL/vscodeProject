import React from 'react';
import {Row,Carousel,Col, Tabs,Divider}from 'antd';
import PCNewsImageBlock from '../pc_news_images_block';
const TabPane=Tabs.TabPane;
export default class Entertrainment extends React.Component{
    render(){
        const setting={
            dots:true,
            autoplay:true,
            speed:500,
            slidesToShow:1,
            infinite:true
       };
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                <div>
                <div className="bottom">
               <img src="../src/images/flex.jpg"/> 
                </div>
                <div className="lefttop">
                    <span class="item-first"></span>
                    <span class="item-two"></span>
                    <span class="item-three"></span>
                    <div className="clear"></div>
                </div>
                </div>
            
                <Tabs  defaultActiveKey="1" tabPosition="left" className="tabsetting">
                 <TabPane tab="综艺" key="1">
                 <h1>this is the first tab</h1>
                 <PCNewsImageBlock count={30} type="guoji" width="100%" cartTitle="国际新闻" imageWidth="132px" />
                 </TabPane>
                 <TabPane tab="影视" key="2"><h1>this is the second tab</h1>
                 <PCNewsImageBlock count={30} type="top" width="100%" cartTitle="国际新闻" imageWidth="132px" />
                 </TabPane>
                 <TabPane tab="网剧" key="3"><h1>this is the third tab</h1>
                 <PCNewsImageBlock count={30} type="guonei" width="100%" cartTitle="国际新闻" imageWidth="132px" />
                 </TabPane>
                </Tabs>
                <div>
                <Divider orientation="left" className="dividersetting">人物专栏</Divider>

                <Divider orientation="left" className="dividersetting">个性推荐</Divider>
                <div class="suggestion">
                  <span>赵 丽 颖</span> 
                  <span>玉 无 心</span>
                  <span>盛 明 兰</span>
                  <span>林    浅</span>
                  <span>花 千 骨</span>
                  <span>碧    瑶</span>
                  <span>尹 新 月</span>
                  <span>琉    璃</span>
                  <span>楚    乔</span>
                </div>
                </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
        
    }
}
