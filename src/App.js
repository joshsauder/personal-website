import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
  render() {
    return (   
      <div>
        <Home id="Home" />
        <About id="About" />
        <Projects id="Projects" />
      </div>
    );
  }
}

export default App;
