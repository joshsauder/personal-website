import React, { Component } from 'react';
import '../App.css';
import '../styles/Home.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Navigation from './Navigation';
import Logo from '../images/logo.png';
import ParticlesBackground from '../components/particles';

class Home extends Component {

  render() {
    return (
      <div id={this.props.id}>
        <Navigation />
        <div className="fill-screen">
              <ParticlesBackground />
              <div className="mt-8">
                <Bounce left duration={2000}>
                  <img className="mx-auto d-block img-responsive" alt="logo" src={Logo}></img>
                </Bounce>
                <div className="row justify-content-center">
                  <Slide top>
                  <div className="col-md-1 col-3 ml-5">
                    <a href="mailto:joshsauder@gmail.com" title="Email"><i className="fa fa-envelope fa-lg btn-social"></i></a>
                  </div>
                  </Slide>
                  <Slide top>
                  <div className="col-md-1 col-3">
                    <a href="www.linkedin.com/in/josh-sauder-5231a1106" title="LinkedIn Profile"><i className="fa fa-linkedin fa-lg btn-social"></i></a>
                  </div>
                  </Slide>
                </div>
                <Slide bottom duration={2000}>
                  <h2 className="text-center text-white chewy-font mt-5">Let&rsquo;s build a better world, one line of code at a time!</h2>
                </Slide>
              </div>
        </div>
      </div>
    );
  }
}

export default Home;
