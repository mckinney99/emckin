import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router';
import {Row, Col, Image} from 'react-bootstrap';
import PdfShow from './PdfShow'
import ProfilePic from './img/eric.png';

class Profile extends Component {
  render(){
  return (
    <div className="text-center">
      <Row>
        <Col>
          <br />
          <br />

          <Image src={ProfilePic} fluid />
          <br />
          <br />

        </Col>
        </Row>
        <Row>
          <Col>
          <p>
            Hello, my name is Eric McKinney and I am a full stack web developer based out of Madison, WI.
            After graduating high school, I took an untraditional path by packing up my drums and touring
            the country with various bands and musicians. I eventually wound up in Los Angeles where I got
            a day job at an ecommerce company that sold fountain pens. The company wanted a new ecommerce website,
            so we hired a team of developers to create one for us. Working with these developers is what kicked
            off my curiosity and ultimately my passion for creating neat, scalable, and useful applications.
            I enrolled in a dev bootcamp (Flatiron) shortly after, and moved back to my home state of Wisconsin.
            In the spring of 2019 I graduated from Flatiron and began my career in tech shortly after. Since then,
            I have worked on several Ruby on Rails and React projects, and am continuously sharpening my skills as a developer.
            Please don't hesitate to reach out if you have any questions whatsoever. Thank you for taking the time to visit my page.
          </p>
          <br />
            <div className="email">
              <a href={"mailto:mckinney99@gmail.com"}>Email</a>
            </div>
            <div className="linkedin">
              <a href={"https://www.linkedin.com/in/eric-mckinney-268ba02a/"}>LinkedIn</a>
            </div>
            <br />
            <br />
            <PdfShow/>


            <br />
            <br />
            <br />
          </Col>
          </Row>
    </div>
    );
  }
}

export default withRouter(Profile);
