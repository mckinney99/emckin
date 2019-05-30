import React, {Component} from 'react';
import './App.css';

import LessonPlanner7 from './img/lesson-planner7.png';
import LessonPlanner2 from './img/lesson-planner2.png';
import LessonPlanner3 from './img/lesson-planner3.png';
import LessonPlanner6 from './img/lesson-planner6.png';

import Setlist2 from './img/setlist2.png';
import Setlist3 from './img/setlist3.png';
import Setlist7 from './img/setlist7.png';

import Cli from './img/cli.png';
import Cli3 from './img/cli3.png';
import Cli5 from './img/cli5.png';

import {withRouter} from 'react-router';
import {Row, Col, Image} from 'react-bootstrap';

class Projects extends Component {
  render() {
  return (
    <div className="projects">
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="projects">
          <Image src={LessonPlanner7} fluid />
          <br />
          <div className="project-header">
            <h1>Lesson Planner App </h1>
            <br />
            <br />
            <h3>Objective:</h3>
            <p>Create an application that allows users to easily create, store, and share lesson plans.</p>
            <br />
            <h2>Solution:</h2>
            <p>A Javascript React framework...</p>
            <Image src={LessonPlanner2} fluid />
            <br />
            <br />
            <br />
            <p>with features that allow for ease of use, and versatility. The Lesson-Planner web app also dynamically renders all content and forms</p>
            <Image src={LessonPlanner3} fluid />
              <br />
              <br />
            <p>All while talking to a Rails backend API for easy-to-use, cross-platform data storage. </p>
              <br />
              <br />
            <Image src={LessonPlanner6} fluid />
            <br/>
            <br />
            <br />
            <br />



            <h1>Setlist-Maker</h1>
            <br />
            <br />
            <br />

            <Image src={Setlist2} fluid />
            <br />
            <br />
            <h3>Objective:</h3>
            <br />
            <br />
            <p>Create a website that allows users to make, edit and view setlists, without creating an account. Made for bands who as indivisuals, get their music from many platforms. This website allows you to share the links of those songs in any particular order you choose, or you can select to share with others who can edit your setlist as well.</p>
            <br />
            <br />
            <h3>Solution:</h3>
            <br />
            <br />
            <p>A front-end Rails application that utilizes AJAX for dynamically rendered content.</p>
            <br />
            <br />
            <Image src={Setlist3} fluid />
            <br />
            <br />
            <br />
            <h3>Features:</h3>
            <br />
            <br />
            <p>Oauth (for general user management and login with Github), Bootsrap CSS, and a Rails/SQL ActiveRecord database. </p>
            <br />
            <br />
            <Image src={Setlist7} fluid />
            <br />
            <br />

            <br />
            <br />
            <h1>Cocktails CLI</h1>
            <br />
            <br />
            <Image src={Cli} fluid />
            <br />
            <br />
            <h3>Objective:</h3>
            <br />
            <br />
            <p>Create a CLI that utilizes Nokogiri to scrape content off the web, and onto our interface.</p>
            <br />
            <br />
            <h3>Solution:</h3>
            <br />
            <br />
            <p>Use Ruby to create the command line interface, and utilize Nokogiri to scrape the multiple levels of nodes neccessary to find the right ones.</p>
            <br />
            <br />
            <Image src={Cli3} fluid />
            <br />
            <br />
            <Image src={Cli5} fluid />







          </div>
          <br />

          </Col>
          <Col md={2}></Col>

        </Row>
    </div>
    );
  }
}

export default withRouter(Projects);
