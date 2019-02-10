import React from 'react';
import { render } from 'react-dom';
import logo from '../logo.svg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
    render() {
        return (
        <div>
        <Navbar variant="dark" expand="lg" className="bg-darkPurple">
          <Navbar.Brand href="/">
            <img src={logo} className="d-block" width="36" height="36" alt="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" active>Josh Sauder</Nav.Link>
            <Nav.Link href="/about" active>About Me</Nav.Link>
            <Nav.Link href="/projects" active>My Projects</Nav.Link>
          </Nav>
      </Navbar>
    </div>
        )
    }

}

export default Navigation;
