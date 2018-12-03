import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={number: 0}
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({number: this.state.number+1})}}>+</button>
        <span>{this.state.number}</span>
        <button onClick={()=>{this.setState({number: this.state.number-1})}}>-</button>
      </div>
    );
  }
}

export default App;
