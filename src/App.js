import React, { Component } from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Personal from "./components/Personal"

class App extends Component {
  render() {
    return (   
      <div>
        <Home id="Home" />
        <Experience id="Experience" />
        <Education id="Education" />
        <Personal id="Personal" />
        <Projects id="Projects" />
      </div>
    );
  }
}

export default App;
