import React, { Component } from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Interests from "./components/Interests"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGraduationCap, 
  faLaptopCode,
  faCode,
  faServer, 
  faShippingFast, 
  faFlask,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(
  faGraduationCap, 
  faCode, 
  faLaptopCode,
  faServer,
  faShippingFast, 
  faFlask,
  faUserFriends,
  fab
  )

class App extends Component {

  render() {
    return (   
      <div>
        <Home id="Home" />
        <Experience id="Experience" />
        <Education id="Education" />
        <Interests id="Interests" />
        <Projects id="Projects" />
      </div>
    );
  }
}

export default App;
