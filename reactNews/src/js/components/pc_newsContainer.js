import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
 import PCNewsImageBlock from './pc_news_images_block';
const TabPane=Tabs.TabPane;
import Comments from './common_comments';
 import PCProduct from './pc_productor';
export default  class PCNewscontainer extends React.Component{
    render(){
      const setting={
           dots:true,
           autoplay:true,
           speed:500,
           slidesToShow:1,
           infinite:true
      };
      return (
          <div>
              <Row>
                  <Col span={2}></Col>
                  <Col span={20} className="container"> 
                  <div class="leftContainer">
                  <div class="carousel">
                     <Carousel {...setting}>
                         <div><img src="./src/images/new1.jpg"/></div>
                         <div><img src="./src/images/new2.jpg"/></div>
                         <div><img src="./src/images/new3.jpg"/></div>
                         <div><img src="./src/images/new4.jpg"/></div>
                     </Carousel>
                  </div>
                  <PCNewsImageBlock  count={6} type="guoji" width="500px" cartTitle="国际头条"  imageWidth="112px"/>  
                  </div>   
                  <Tabs className="tabsnews">
                      <TabPane tab="新闻" key="1">
                        <PCNewsBlock  count={22} type="top" width="100%" bordered="false"/>
                      </TabPane>
                      <TabPane tab="国际" key="2">
                        <PCNewsBlock count={22} type="guoji"  width="100%" bordered="false"/>
                      </TabPane>
                  </Tabs>
    
                  <Tabs className="tabsproduct">
                  <TabPane tab="快速链接" key={1}>
                    <PCProduct />
                  </TabPane>
                  </Tabs>
                  <div class="clear"></div>
                      <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
                      <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
                  <Comments />
                  
                  </Col>
                  <Col span={2}></Col>
              </Row>
          </div>
      )
    }
}