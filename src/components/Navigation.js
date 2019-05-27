import React from 'react';
import logo from '../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'font-awesome/css/font-awesome.min.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navigation extends React.Component {
    render() {
        return (
        <div className="nav-fixed-top">
        <Navbar variant="dark" expand="md" className="bg-darkPurple" id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <img src={logo} className="d-block" height="60" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle">
            <i className="fa fa-align-right"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}>
              Home
            </Link>
            <Link className="nav-link" activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
                >
                About Me
            </Link>
            <Link className="nav-link" activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              >
              My Projects
            </Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
        )
    }

}

export default Navigation;
