import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Menu,Card,Tabs,message, Modal,Form,Input,Button,Checkbox,notification}from 'antd';
const FormItem=Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'

  class Commoncomments extends React.Component{
     constructor(){
         super();
         this.state={
             comments:''
         };
     }
     componentDidMount(){
        var myFetchOption={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOption)
        .then(response=>response.json())
        .then(data=>{
            this.setState({comments:data});
           //收藏成功以后做全局的提醒
        //    alert("您已经成功收藏该文章");
        //    notification['success']({message:'ReactNews提醒',description:'收藏此文章成功'})
        });
    }
     handleSubmit(){
         e.preventDefault();
         var myFetchOption={
             method:'GET'
         };
         var formData=this.props.form.getFieldsValue();

         fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&comment="+formData.remark,myFetchOption)
         .then(response=>response.json())
         .then(json=>{
         this.componentDidMount();
         })
     
     }
     addUserCollection(){
             var myFetchOption={
                 method:'GET'
             };
             fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOption)
             .then(response => response.json())
             .then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});

         
     };
    
     render(){
         const {getFieldDecorator,getFieldError,getFieldsError,isFieldTouched,getFieldsValue}=this.props.form;
        const {comments}=this.state;
        const commentsList=comments.length
        ?comments.map((comments,index)=>{
              <Card key={index} title={comments.UserName}  extra={<a href="a">发布于{comments.dateTime}</a>}></Card>
        })
        :'暂无用户评论';
         return(
             <div>
                 <Row>
                     <Col span={24}>
                     {commentsList}
                     <Form onSubmit={this.handleSubmit.bind(this)}>
                     <FormItem>
                         <Input type="textarea" placeholder=" free" {...getFieldDecorator('remark')} />
                     </FormItem>
                     <Button type="primary" htmlType="submit"> 提交评论</Button>
                     <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}> 收藏文章</Button>
                     </Form>
                     </Col>
                 </Row>
             </div>
         )
     }
}
const Comments=Form.create()(Commoncomments);

export default Comments;