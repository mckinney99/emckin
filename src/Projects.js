import React, {Component} from 'react';
import './App.css';

import Particles from 'react-particles-js';

import Figma1 from './img/figma-demo-1.png';
import Figma2 from './img/figma-demo-2.png';
import Figma3 from './img/figma-demo-3.png';

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
import {Col, Image} from 'react-bootstrap';

const particleOpt = {
  "particles": {
    "number": {
      "value": 180
      },
      "size": {
      "value": 5
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

class Projects extends Component {
  render() {
    return (

      <div className="projects">

        <div className="particle">
          <div className="col text-center justify-content-center align-self-center">
            <Particles
              params={particleOpt}/>
            <h1 className="p-text">Projects</h1>
          </div>
        </div>

        <Col>
          <div className="text-center">
            <div className="project">
              <h1>Figma Practice App</h1>
              <p style={{display: "inline"}}>I wanted to get better at translating my designs in Figma to code, so I created
              this app to help me practice.</p>

              <br />
              <br />

              <a href="https://scintillating-druid-0f971e.netlify.app/" target="_blank" rel="noopener noreferrer">
                Visit the live site</a>

              <br />
              <br />

              <a href="https://www.figma.com/file/5OiF2gRIMr9xPELSCngcF2/design-demo1?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
                View the Figma design file</a>

              <br />
              <br />

              <a href="https://github.com/mckinney99/figma-practice-demo/" target="_blank" rel="noopener noreferrer">
                Checkout the Github repo</a>
              
              <Image src={Figma1} fluid/>

              <Image src={Figma2} fluid/>

              <Image src={Figma3} fluid/>

              <br />
              <br />

              <h1>Lesson Planner App </h1>
              <Image src={LessonPlanner7} fluid/>
              <h3 style={{display: "inline"}}>Objective:</h3>
              <p style={{display: "inline"}}>Create an application that allows users to easily create, store, and share
                lesson plans.</p>

              <br/>
              <br/>

              <h3 style={{display: "inline"}}>Solution:</h3>
              <p style={{display: "inline"}}>A Javascript React framework...</p>
              <Image src={LessonPlanner2} fluid/>
              <p>with features that allow for ease of use, and versatility. The Lesson-Planner web app also dynamically
                renders all content and forms</p>
              <Image src={LessonPlanner3} fluid/>
              <p>All while talking to a Rails backend API for easy-to-use, cross-platform data access. </p>
              <Image src={LessonPlanner6} fluid/>
            </div>


            <div className="project">
              <h1>Setlist-Maker</h1>
              <Image src={Setlist2} fluid/>
              <h3>Objective:</h3>
              <p>Create a website that allows users to make, edit and view setlists, without creating an account. Made
                for bands who as indivisuals, get their music from many platforms. This website allows you to share the
                links of those songs in any particular order you choose, or you can select to share with others who can
                edit your setlist as well.</p>
              <h3>Solution:</h3>
              <p>A front-end Rails application that utilizes AJAX for dynamically rendered content.</p>
              <Image src={Setlist3} fluid/>
              <h3>Features:</h3>
              <p>Oauth (for general user management and login with Github), Bootstrap CSS, and a Rails/SQL ActiveRecord
                database. </p>
              <Image src={Setlist7} fluid/>
            </div>

            <div className="project">
              <h1>Cocktails CLI</h1>
              <Image src={Cli} fluid/>
              <h3>Objective:</h3>
              <p>Create a CLI that utilizes Nokogiri to scrape content off the web, and onto our interface.</p>
              <h3>Solution:</h3>
              <p>Use Ruby to create the command line interface, and utilize Nokogiri to scrape the multiple levels of
                nodes neccessary to find the right ones.</p>
              <Image src={Cli3} fluid/>
              <Image src={Cli5} fluid/>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default withRouter(Projects);
