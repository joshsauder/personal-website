import React from 'react';
import '../App.css';
import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Navigation.css';

class Navigation extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        scroll: false
      }
    }

    componentDidMount(){
      var scroll = 0
      window.addEventListener('scroll', this.setScrollPos)
    }

    setScrollPos = () => {
      if(window.scrollY > 500 && !this.state.scroll){
        this.setState({scroll: true})
      }else if(window.scrollY < 500 && this.state.scroll) {
        this.setState({scroll: false})
      }
    }

    render() {
        return (
        <div className="nav-fixed-top">
          <Navbar collapseOnSelect variant="dark" expand="md" className={this.state.scroll ? "bg-darkPurple" : ""}>
            <Navbar.Brand href="/" className="mt-2">
              <h4 className="chewy-font">Josh Sauder</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle">
              <i className="fa fa-align-right"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" activeClass="active"
                      to="Home"
                      href="#"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                  >
                    Home
                </Link>
                <Link className="nav-link" activeClass="active"
                    to="Experience"
                    href="#"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={400}
                >
                  Work Experience
                </Link>
                <Link className="nav-link" activeClass="active"
                      to="Education"
                      href="#"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                  >
                    Education
                </Link>
                <Link className="nav-link" activeClass="active"
                      to="Personal"
                      href="#"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={400}
                >
                    Interests
                </Link>
                <Link className="nav-link" activeClass="active"
                      to="Projects"
                      href="#"
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
