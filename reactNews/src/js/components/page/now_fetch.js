import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


export default class Now extends React.Component{
    constructor(){
        super();
        this.state={
            news:'', //取接口里的数据
        }
    }
    componentWillMount(){
        fetch('/api/2/article/v25/stream/',{method:'GET'})
        .then(res=>res.json())
        .then(json=>{
            this.setState({news: json.data});
            console.log(json);
            console.log(json.data);
        });
    }
    render(){
        const {news}=this.state;
        const newsList=news.length
        ?
         news.map((newsItem,index)=>(
            <div key={index} class="now_fetch">
               <Link to={`details/${newsItem.docid}`} target="_blank">
                <div>
                  <img alt="" src={newsItem.weixin_cover_image}/>
                  <p>{newsItem.abstract}</p> 
                    <a>{newsItem.article_url}</a>
                    <p>{newsItem.title}</p>
                </div>
                </Link>
            </div>
        ))
        :
        '没有加载任何数据';
        return (
        <div>
             {newsList}
        </div>
        )
           
        
    }
}
