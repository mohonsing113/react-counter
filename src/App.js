import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup';

class App extends Component {
  render() {
    return (
      <CounterGroup size = {3} />
    );
  }
}

export default App;
