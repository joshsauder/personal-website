import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
      </div>
    );
  }
}

export default App;
