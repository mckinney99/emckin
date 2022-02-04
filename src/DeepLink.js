import React, {Component} from 'react';
import './App.css';
import {Col} from "react-bootstrap";
import {withRouter} from "react-router";

class DeepLink extends Component {
  render(){
    return (
      <div className="text-center">
        <Col>
          <p>A tool for Deep Linking</p>
        </Col>
      </div>
    );
  }
}

export default withRouter(DeepLink);
