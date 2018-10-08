import React from 'react';
import {Card} from 'antd';
//import {Router,Route,Link,browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link,browserHistory} from 'react-router-dom';

export default class PCNewsimageblock extends React.Component{
    constructor(){
        super();
        this.state={
            news:''  //取接口里的数据
        }
    }
    componentWillMount(){
        var myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
	};

    render(){
        const styleImage={
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        }
        const styleH3={
            width:this.props.imageWidth,
            //当长度超出固定的宽度时显示...
            whiteSpace:"nowrap",
             overflow:"hidden",
            textOverflow:"ellipsis"

        }
        const {news}=this.state;
        const newsList=news.length
        ?
         news.map((newsItem,index)=>(
            <div key={index} class="imageBlock">
               <Link to={`details/${newsItem.docid}`} target="_blank">
                <div class="custom-image">
                <img alt=" " style={styleImage} src={newsItem.thumbnail_pic_s} />
                </div>
                <div>
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>
                </Link>
            </div>
        ))
        :
        '没有加载任何数据';
        //上面的docid是接口里返回的新闻的唯一ID，title是取到新闻的标题
        return(
        
         <div class="topNewsList">
         <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}} >
             
         </Card>
          {newsList}
         </div>
     

        )
    }
}