import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Login from './components/login';

ReactDOM.render(( 
    <Router>
        <div>
            <Route exact path="/" component={Login}></Route>
            <Route path="/app" component={App}></Route>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
