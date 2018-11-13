import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {hashHistory} from 'react-router-dom';
import { LocaleProvider, DatePicker, message,Button } from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import  PCNewsDetails  from './components/pc_details';
import UserCenter from './components/pc_usercenter';
import MobileDetails from './components/mobile_details';
import Mobilecenter from './components/mobile_usercenter';

class Root extends React.Component{

    render(){
    
        return (
            <div> 
                <MediaQuery query='(min-device-width:600px)'>
                 <Router history={hashHistory}>
                 <div>
                   <Route path="/"　component={PCIndex}> </Route>
                   <Route path="/details/:uniquekey"　component={PCNewsDetails}> </Route>
                   <Route path="/usercenter"　component={UserCenter}> </Route>
                   </div>
                </Router> 
                  
                </MediaQuery>
                <MediaQuery query='(max-device-width:600px)'> 
                   <Router history={hashHistory}>
                 <div>
                   <Route path="/"　component={MobileIndex}> </Route>
                   <Route path="/details/:uniquekey"　component={MobileDetails}> </Route>
                   <Route path="/usercenter"　component={Mobilecenter}> </Route>
                   </div>
                </Router> 
                </MediaQuery>
               
             </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));