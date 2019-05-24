import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (   
      <BrowserRouter>
        <div className="App">       
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
