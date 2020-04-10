import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Navigation.css";

function Navigation() {
  const [scroll, setScroll] = useState(false);

  //add scroll event listener
  useEffect(() => window.addEventListener("scroll", setScrollPos), [])

  /*
    If position moves, determine if the nav bar should be transparant or not
    */
  const setScrollPos = () => {
    if (window.scrollY > 500 && !scroll) {
      setScroll(true);
    } else if (window.scrollY < 500 && scroll) {
      setScroll(false);
    }
  };

  return (
    <div className="nav-fixed-top">
      <Navbar
        collapseOnSelect
        variant="dark"
        expand="md"
        className={scroll || window.screen.width < 576 ? "bg-darkPurple" : ""}
      >
        <Navbar.Brand href="/" className="mt-2">
          <h4 className="chewy-font">Josh Sauder</h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle"
        >
          <i className="fa fa-align-right" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="Home"
              href="#"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="Experience"
              href="#"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
            >
              Work Experience
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="Education"
              href="#"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
            >
              Education
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="Interests"
              href="#"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
            >
              Interests
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="Projects"
              href="#"
              spy={true}
              smooth={true}
              offset={-200}
              duration={400}
            >
              My Projects
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
