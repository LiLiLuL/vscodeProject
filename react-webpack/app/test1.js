import React from 'react';
export default class test extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>B页面Test,参数:{this.props.match.params.param.aaa}</div>

        );
    }
}

