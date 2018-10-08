import React from 'react';
import ReactDOM from 'react-dom';
import Mixin from 'react-mixin';
import BodyChild from './bodychild';
import PropTypes from 'prop-types';
import MixinLog from'./mixins';

export default class BodyIndex extends React.Component{
    componentWillMount(){
        console.log("BodyIndex=componentWillMount")
    };
    constructor(){
        super();//调用基类的所有初始化方法
        this.state={username:"chenxq",age:"22"}
    };
    changeUserInfo(){
        this.setState({age:50});
        // var mySubmitButton=document.findElementById('buttonSubmit');
        // ReactDOM.findDOMNode(mySubmitButton).style.color='red';
        this.refs.buttonSubmit.style.color=green;
        MixinLog.log();
    };
    handleChildValueChange(event){
        this.setState({age:event.target.value});
    };
    render(){
       setTimeout(()=>{
        this.setState({username:"xiaoqing",age:"100"})
       },4000);

        var userName="Chenxq";
        var boolInput=false;
        var html= "I&nbspam&nbspreally&nbspreally&nbsplove&nbspyou!"
        return (
            <header>
                <h2>页面的主体内容</h2>
                <p>{userName==' '?'用户还未登录':'用户名'+userName}</p>
                <p>接收到的父页面的属性：userid:{this.props.userid} username: {this.props.username}</p>
                <p>age:{this.state.age}</p>
                <p><input type='button' value='choose' disabled={boolInput}/> </p>
                {/* 注释所用方案*/}
                <p>{html}</p>{/*需要进行Unicode的转码*/}
              
                <p>{this.state.username} {this.state.age} {this.props.userid}</p>
                <input  id="buttonSubmit" type="button" value="submit" onClick={this.changeUserInfo.bind(this,99)}
                  />
                  <BodyChild {...this.props} id={456} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </header>
        )
    }
}

 BodyIndex.propTypes={
     userid:PropTypes.number


 };
 Mixin(BodyIndex.prototype,MixinLog);
 
