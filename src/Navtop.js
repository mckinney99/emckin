import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav} from 'react-bootstrap';
import  { Link, NavLink } from 'react-router-dom';

export default class Navtop extends Component {
  render() {
    return (
      <Navbar default >
        <Navbar.Brand>
        <Link to="/">Eric McKinney</Link>
      </Navbar.Brand>
        <Nav className="ml-auto">


          <NavLink to="/">Projects</NavLink>

        </Nav>
      </Navbar>
    );
  }
}
