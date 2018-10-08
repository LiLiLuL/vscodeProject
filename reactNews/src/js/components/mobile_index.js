import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
const TabPane=Tabs.TabPane;
import MobileList from './mobile_first'
export default class Mobileindex extends React.Component{
    render(){
        const setting={
            dots:true,
            autoplay:true,
            speed:500,
            slidesToShow:1
       };
        return(
            <div>
                <MobileHeader />
                <Tabs>
                    <TabPane tab="头条" key="1">
                    <div class="carousel">
                     <Carousel {...setting}>
                         <div><img src="./src/images/new1.jpg"/></div>
                         <div><img src="./src/images/new2.jpg"/></div>
                         <div><img src="./src/images/new3.jpg"/></div>
                         <div><img src="./src/images/new4.jpg"/></div>
                     </Carousel>
                  </div>
                        <MobileList count={20} type="top" />
                    </TabPane>
                    <TabPane tab="娱乐" key="2">
                        <MobileList count={20} type="yule" /> 
                    </TabPane>
                    <TabPane tab="实时" key="3">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="游戏" key="4">
                    
                    </TabPane>
                    <TabPane tab="社会" key="5">
                       <MobileList count={20} type="shehui" />
                    </TabPane>
                    <TabPane tab="国际" key="6">
                       <MobileList count={20} type="guoji" />
                    </TabPane>
                    <TabPane tab="体育" key="7">
                    
                    </TabPane>
                    <TabPane tab="时尚" key="8">
                    
                    </TabPane>

                </Tabs>
                <MobileFooter />
            </div>

        );
    };
}