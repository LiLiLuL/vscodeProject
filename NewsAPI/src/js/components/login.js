import React from 'react';
import {Form} from 'antd';
const FormItem=Form.Item;
export default class Login extends React.Component{
    constructor(){
        super();
    }
    handleSubmit(e){
        e.preventDefault();
        let data=this.props.form.getFieldsValue();
        console.log("表单值",data);
        let history=this.context.router.history;
        fetch('/users',data).then(res=>{
            let resMsg=res.data.data;
            if(resMsg.name==="lily"&&resMsg.password==="1"){
                history.push('/manage');
            }else{
                
            }
        })
    }
    render(){
        return(

        )
    }
}