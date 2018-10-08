import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {hashHistory} from 'react-router-dom';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';


class Root extends React.Component{

    render(){
    
        return (
            <div> 
                <MediaQuery query='(min-device-width:1224px)'>
                 <Router history={hashHistory}>
                 <div>
                   <Route path="/"　component={PCIndex}> </Route>
                   <Route path="/login" component={Login}></Route>
                </div>
                </Router> 
                  
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'> 
                   
                </MediaQuery>
               
             </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));