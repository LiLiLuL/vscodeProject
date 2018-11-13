import React from 'react';

class PIndex extends React.Component{
  constructor(props){
    super(props);
    this.state={
      yyy:this.props
    }
  }
    componentDidMount() {
        this.props.form.validateFields();
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      handleRegister=()=>{
        this.state.yyy.history.push('/register');
      }
    render(){
        
        return(
            <div>这是首页</div>
        )
    }
   
}

export default PIndex;