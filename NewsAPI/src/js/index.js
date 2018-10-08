import React from 'react';
import ReactDOM from 'react-dom';
class Index extends React.Component{
    render(){
        return <h1>this is the login page</h1>
    }
}
ReactDOM.render(<Index/>,document.getElementById("login"))