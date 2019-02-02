import React from 'react';
import { render } from 'react-dom';
import logo from '../logo.svg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-darkPurple">
        <a className="navbar-brand" href="/">
            <img src={logo} className="d-block" width="36" height="36" alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Josh Sauder<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">My Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
        )
    }

}

export default Navigation;
