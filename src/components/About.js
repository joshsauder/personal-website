import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './Navigation';
import AboutMe from './AboutMe'

class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <p>About Me</p>
      </div>
    );
  }
}

export default About;
