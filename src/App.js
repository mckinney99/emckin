import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Navtop from './Navtop.js';
import Profile from './Profile.js';
import Projects from './Projects.js';




class App extends Component {
 render() {
  return (
    <Router>
      <Navtop />


      <Switch>
        <Route path='/' exact component={withRouter(Projects)} />
        <Route path='/profile' component={withRouter(Profile)} />
      </Switch>

    </Router>
)
  }
}

export default App;
