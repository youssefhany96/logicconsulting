import React, { Component } from 'react';
import Navigation2 from './components/Navigation2/Navigation2';
import Logo from './components/Logo/Logo';
import Navigation1 from './components/Navigation1/Navigation1';
import { Button } from '@material-ui/core';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Navigation1 />
        <Navigation2 />
      </div>
    )  
  }  
}

export default App;
