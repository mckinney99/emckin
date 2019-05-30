import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router';
import {Row, Col, Image} from 'react-bootstrap';

import ProfilePic from './img/eric.png';

class Profile extends Component {
  render(){
  return (
    <div className="profile">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <br />
          <br />

          <Image src={ProfilePic} fluid />
          <br />
          <br />

        </Col>

        <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={2}/>
          <Col md={8}>
          <p>Eric McKinney is a full stack web developer with experience in Ruby on Rails, Javascript, and React. Inspired by his position as an eCommerce manager, and love for all things Raspberry Pi, Eric has dedicated the last three years to learning web development through various online courses and at The Flatiron School, a top-rated coding bootcamp. Through his experience both as a community volunteer, and a musician, Eric seeks to use his skills to create products and systems that benefit the community.</p>
          <br />
            <div className="email">
            <a href={"mailto:" + 'mckinney99@gmail.com'}>Email</a>
            </div>
            <div className="linkedin">
            <a href={"https://www.linkedin.com/in/eric-mckinney-268ba02a/"}>LinkedIn</a>
            </div>
            <br />
            <br />
            <br />
          </Col>
          <Col md={2} />
          </Row>
    </div>
    );
  }
}

export default withRouter(Profile);
