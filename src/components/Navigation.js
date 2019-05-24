import React from 'react';
import logo from '../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'font-awesome/css/font-awesome.min.css';


class Navigation extends React.Component {
    render() {
        return (
        <div className="nav-fixed-top">
        <Navbar variant="dark" expand="md" className="bg-darkPurple" id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <img src={logo} className="d-block" height="60" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa fa-align-right"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="/about" active>About Me</Nav.Link>
            <Nav.Link href="/projects" active>My Projects</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link className="justify-content-end" href="mailto:joshsauder@gmail.com"><i className="fa fa-envelope fa-lg"></i></Nav.Link>
            <Nav.Link className="justify-content-end" href="www.linkedin.com/in/josh-sauder-5231a1106"><i className="fa fa-linkedin fa-lg"></i></Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
        )
    }

}

export default Navigation;
