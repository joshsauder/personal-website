import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (   
      <div>
        <Home id="Home" />
        <About id="About Me" />
        <Projects id="Projects" />
      </div>
    );
  }
}

export default App;
