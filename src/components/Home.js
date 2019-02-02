import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './Navigation';
import AboutMe from './AboutMe';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
      </div>
    );
  }
}

export default Home;
