import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './Navigation';
import AboutMe from './AboutMe'

class Projects extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <p>Projects</p>
      </div>
    );
  }
}

export default Projects;
