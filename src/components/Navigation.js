import React from 'react';
import { render } from 'react-dom';
import logo from '../logo.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'font-awesome/css/font-awesome.min.css';

class Navigation extends React.Component {
    render() {
        return (
        <div className="nav-fixed-top">
        <Navbar variant="dark" expand="md" className="bg-darkPurple">
          <Navbar.Brand href="/">
            <img src={logo} className="d-block" height="60" alt="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="/about" active>About Me</Nav.Link>
            <Nav.Link href="/projects" active>My Projects</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link className="justify-content-end" href="mailto:joshsauder@gmail.com"><i className="fa fa-envelope fa-lg"></i></Nav.Link>
            <Nav.Link className="justify-content-end" href="www.linkedin.com/in/josh-sauder-5231a1106"><i className="fa fa-linkedin fa-lg"></i></Nav.Link>
          </Nav>
      </Navbar>
    </div>
        )
    }

}

export default Navigation;
