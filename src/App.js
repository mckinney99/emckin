import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navtop from './Navtop.js';
import Profile from './Profile.js';
import Projects from './Projects.js';
import DeepLink from './DeepLink.js';


class App extends Component {
 render() {
  return (
    <Router>
      <Navtop />

      <Switch>
        <Route path='/' exact component={Projects} />
        <Route path='/profile' component={Profile} />
        <Route path='/deeplink' component={DeepLink} />
      </Switch>

    </Router>
)
  }
}

export default App;
