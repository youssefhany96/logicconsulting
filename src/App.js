import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation2 from './components/Navigation2/Navigation2';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ContactUs from './components/pages/ContactUs/ContactUs';
import NoMatch from './components/pages/NoMatch';
import Logo from './components/Logo/Logo';
import Navigation1 from './components/Navigation1/Navigation1';
import Navigation from './components/Navigation/Navigation';
import { Button } from '@material-ui/core';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
    }
  
  handleClose = () => {
    this.setState({ isOpen: false })
  }   
  render() {
    return (
      <React.Fragment>
        <Router>
        <Navigation2
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.isOpen}
        />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    )  
  }  
}

export default App;
