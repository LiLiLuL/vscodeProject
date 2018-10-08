import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './component/header';
import ComponentFooter from './component/footer.js';
import BodyIndex from './component/bodyindex';
import { LocaleProvider, DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

class Index extends React.Component{

    render(){
    /*可以将组件定义成一个对象来实现，就可以根据条件来判断加载哪些组件了
        var component;
        if(用户已登录){
        component=<ComponentLoginHeader/>
    }
    else{
        component=<ComponentHeader />
    }
    */
        return (
            <div>
            <ComponentHeader />
            <BodyIndex  userid={123456} username="xiaoxiao"/>
            <ComponentFooter/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));