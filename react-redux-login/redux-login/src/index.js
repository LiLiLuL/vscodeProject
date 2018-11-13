import React from 'react';
import ReactDOM from 'react-dom';
// 配合applyMiddleware解决redux异步问题
import thunk from 'redux-thunk';
//createStore 接受reducer生成state， compose 合并成store其他数据，applyMiddleware接受thunk解决redux异步问题
import {createStore,compose,applyMiddleware}from 'redux';
//Provider负责传递store
import {Provider} from 'react-redux';
//引入react-router-dom各种路由元素
import { Link,BrowserRouter as Router,Route} from 'react-router-dom';
//生成store
import reducer from './reducer';


import CheckLogin from './components/checkLogin';
import Login from './containers/login/login';
import Register from './containers/register/register';
import 'antd/dist/antd.css';

const store=createStore(reducer,compose(
    applyMiddleware(thunk),//解决redux异步问题
    window.devToolsExtension ? window.devToolsExtension() : f => f // chrome控制台redux工具
))
export default class Index extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <Router >
              
                <div>
                 <CheckLogin />
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                </div>
                </Router>               
            </Provider>        
        ) 
    }   
}

ReactDOM.render(<Index/>,document.getElementById("root"));