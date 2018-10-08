import React from "react";
import {Row,Col,BackTop} from 'antd';
import ImageBlock from './pc_news_images_block';
import Comments from './common_comments';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    };
    componentDidMount(){
        var myFetchOption={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({newsItem: json});
            console.log("details:"+newsItem);
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    }
    createMarkup(){
        return {
            _html:this.state.newsItem.pagecontent
        }
    }

    render(){
        return (
            <div>
                <PCHeader />
               <Row>
                   <Col span={2}></Col>
                   <Col span={14} className="container">
                   <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup().bind(this)}></div>
                   <Comments uniquekey={this.props.params.uniquekey} />
                   </Col>
                   <Col span={6}>
                     <ImageBlock count={20} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px" />
                   </Col>
                   <Col span={2}></Col>
               </Row>
               <PCFooter/>
               <BackTop />
            </div>
        )
    }

}