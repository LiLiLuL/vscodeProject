import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css'


export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state={
            miniHeader:false
        }
    }
    switchHeader(){
        this.setState({
            miniHeader: !this.state.miniHeader
            });
        
    
        }
    render(){
        //内联样式
        const styleComponentHeader={
            header:{
                backgroundColor:"#333333",
                color:"#f3f3f3",
                "paddingTop": (this.state.miniHeader)?"3px":"15px",
                paddingBottom: (this.state.miniHeader)?"3px":"15px",
            }
        };
        return (
            <header className="small" style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)}>
                <h1>This is the header</h1>
            </header>
        )
    }
 }

 