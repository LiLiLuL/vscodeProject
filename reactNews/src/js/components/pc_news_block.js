import React from 'react';
import {Card} from 'antd';
//import {Router,Route,Link,browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link,browserHistory} from 'react-router-dom';
export default class PCNewsblock extends React.Component{
    constructor(){
        super();
        //取接口里的数据
       this.state={
            news:''
        };
    }
    
    componentWillMount(){
        var myFetchOptions={
            method:'GET',
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
    }
   
    render(){
        console.log("render");
        console.log(this.state.news)
        const {news}=this.state;
        console.log("renderNews");
        console.log(news.length);
        const newsList=news.length 
        ?news.map((newsItem,index)=>(
            <li key={index}>
                <Link to={`/details/${newsItem.uniquekey}`} target="_blank">
                 {newsItem.title}
                </Link>
            </li>
        ))
       :'没有加载任何数据';

        console.log(newsList);
        //上面的docid是接口里返回的新闻的唯一ID，title是取到新闻的标题
        return(
         <div class="topNewsList">
         <Card>
             <ul>
            {newsList}
             </ul>
         </Card>

         </div>
        )
    }
}