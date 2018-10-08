import {Row,Col,Card} from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link,browserHistory} from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
 class FetchTest extends React.Component{
     constructor(){
         super();
         this.state={
             news:''
         }
     }
    getNews(data){        //获取到数据
       console.log(data)
    
    }  
    componentWillMount(){
      
        fetch('/api/2/article/v25/stream/',{method:'GET'})
        .then(function(res){
           console.log(res);
           return res.json();
        })
        .then(data=>console.log(data));
    }

     render(){
         const {news}=this.state;
         const newsList=news.length
         ?news.map((newsItem,index)=>(
         <li key={index}>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
            </Link>
         </li>
         )
         )
         :'没有加载任何数据';

         return(
             <Row>
                 <Col span={2}></Col>
                 <Col span={20}>
                 <div>
                     this is   the test!!
                     <Card>
                         <ul>
                             {newsList}
                         </ul>
                     </Card>
                 </div>
                 </Col>
                 <Col span={2}></Col>
             </Row>
         )
     }
 }  
 export default FetchTest;