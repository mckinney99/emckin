import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Particles from 'react-particles-js';
import Navtop from './Navtop.js';
import Profile from './Profile.js';
import Projects from './Projects.js';
import Layout from './Layout.js';

class App extends Component {
 render() {
  return (
    <Router>
    <Layout>
      <Navtop />
        <Switch>
          <Route path='/' exact component={withRouter(Projects)} />
          <Route path='/profile' component={withRouter(Profile)} />
        </Switch>
      </Layout>
    </Router>
)
  }
}

export default App;
