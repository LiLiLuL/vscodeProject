
import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Xq from './xq';
import  Test from './test';
import  TestB from './test1';
import Nav from './nav';
import Error from './erro';


ReactDOM.render(
    <Router  basename="demo">
        <div>
            <Nav />
            <Switch>
            <Route exact path="/" component={Xq} />
            <Route path="/Test" component={Test} />
            <Route path="/TestB/:param/:aaa" component={TestB} />
            <Redirect from="/redireact" to="TestB" />
            <Route  component={Error} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
);