import React, { Component } from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (   
      <div>
        <Home id="Home" />
        <Education id="Education" />
        <Projects id="Projects" />
      </div>
    );
  }
}

export default App;
