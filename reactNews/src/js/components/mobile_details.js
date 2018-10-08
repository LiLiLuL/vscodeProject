import React from "react";
import {Form,Row,Col,BackTop} from 'antd';
import ImageBlock from './pc_news_images_block';
import Comments from './common_comments';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
const formData=Form.Item;
export default class PCNewsdetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    };
    createMarkup(){
        return {
            _html:this.state.newsItem.pagecontent
        }
    }
    componentDidMount(){
        var myFetchOption={
            merhod:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    }

    render(){
        return (
            <div>
                <PCHeader />
               <Row>
                  
                   <Col span={24} className="container">
                   <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup().bind(this)}></div>
                   <Comments uniquekey={this.props.params.uniquekey} />
                   </Col>
               
               </Row>
               <PCFooter/>
               <BackTop />
            </div>
        )
    }

}