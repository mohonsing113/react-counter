import React, { Component } from 'react';

class CounterCreator extends Component{

  state = { inputValue: ""}

  updateInputValue = (evt)=> {
    this.setState({
      inputValue: evt.target.value
    });
  }

  dispatch = ()=>{
    this.props.onAdded(parseInt(this.state.inputValue));
    this.state.inputValue= '';
  }

  render(){
    return (
        <div>
            <input value={this.state.inputValue} 
                   onChange={this.updateInputValue}>
            </input>
            <button onClick={this.dispatch} >regen</button>
        </div>
    )
  }
}

export default CounterCreator;