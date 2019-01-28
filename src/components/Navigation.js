import React from 'react';
import logo from '../logo.svg';

class Navigation extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-darkPurple">
        <a className="navbar-brand" href="/">
            <img src={logo} className="d-block" width="36" height="36" alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Josh Sauder<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My Projects</a>
            </li>
          </ul>
        </div>
      </nav>
        )
    }

}

export default Navigation;
