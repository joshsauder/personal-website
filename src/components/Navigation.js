import React from 'react';
import '../App.css';
import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/JoshSauderLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Navigation.css';

class Navigation extends React.Component {

    render() {
        return (
        <div className="nav-fixed-top">
          <Navbar collapseOnSelect variant="dark" expand="md" className="bg-darkPurple">
            <Navbar.Brand href="/">
              <img src={logo} className="d-block" height="40" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle">
              <i className="fa fa-align-right"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventkey={1}>
                    <Link className="nav-link" activeClass="active"
                      to="Home"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                      >
                        Home
                    </Link>
                </Nav.Link>
                <Nav.Link eventkey={2}>
                    <Link className="nav-link" activeClass="active"
                      to="About Me"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                      >
                        About Me
                    </Link>
                </Nav.Link>
                <Nav.Link eventkey={3}>
                    <Link className="nav-link" activeClass="active"
                      to="Projects"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                      >
                        My Projects
                    </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        )
    }

}

export default Navigation;
