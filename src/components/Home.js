import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Logo from '../logo.png';
import ParticlesBackground from '../components/particles';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="col-12 fill-screen">
              <ParticlesBackground />
              <div className="mt-8">
                <img className="mx-auto d-block" src={Logo}></img>
                <div className="text-center row">
                  <div className="col-sm-2 offset-md-4">
                    <a href="mailto:joshsauder@gmail.com"><i className="fa fa-envelope fa-lg btn-social"></i></a>
                  </div>
                  <div className="col-sm-2">
                    <a href="www.linkedin.com/in/josh-sauder-5231a1106"><i className="fa fa-linkedin fa-lg btn-social"></i></a>
                  </div>
                </div>
                <h2 className="text-center text-white mt-5">Let&rsquo;s build something that brings a positive impact on the world!</h2>
              </div>
        </div>
        <About />
        <Projects />
      </div>
    );
  }
}

export default Home;
