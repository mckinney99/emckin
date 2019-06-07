import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Container, Button, Col, Row } from 'react-bootstrap';
import Projects from './Projects';
import Profile from './Profile';
import  { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default class Navtop extends Component {
  render() {
    return (
      <Navbar default >
        <Navbar.Brand>
        <Link to="/">Eric McKinney</Link>
      </Navbar.Brand>
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/">Projects</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar>


    // <div>
    //
    //   <Navbar sticky="top" bg="dark" variant="dark">
    //     <Link style={{ textDecoration: 'none'}} to="/">
    //     <Navbar.Brand>
    //       Eric McKinney
    //     </Navbar.Brand>
    //   </Link>
    //
    //
    //     <Col md={8}></Col>
    //
    //
    //     <Link style={{ textDecoration: 'none'}} to="/">
    //       <Nav.Item>
    //         Projects
    //       </Nav.Item>
    //     </Link>
    //
    //     <Link style={{ textDecoration: 'none'}} to="/profile">
    //       <Nav.Item>
    //         Profile
    //       </Nav.Item>
    //     </Link>
    //
    //
    //   </Navbar>
    // </div>

  );
}
}

// export default Navtop;
