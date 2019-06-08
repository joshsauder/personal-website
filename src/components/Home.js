import React, { Component } from 'react';
import '../App.css';
import '../styles/Home.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Navigation from './Navigation';
import Logo from '../images/JoshSauderLogo.png';
import Particles from 'react-particles-js';
import { particlesStyle, particlesParam} from '../data/particles';

class Home extends Component {

  render() {
    return (
      <div id={this.props.id}>
        <Navigation />
        <Particles  
        style = {particlesStyle}
        params = {particlesParam}
        />
        <div className="fill-screen">
          <div className="mt-8">
            <Bounce left duration={2000} delay={2000}>
                <img className="mx-auto d-block img-responsive img-max" alt="logo" src={Logo}></img>
            </Bounce>
            <div className="row justify-content-center">
              <Slide top duration={2000}>
                <div className="col-md-1 col-3 ml-4">
                  <a href="mailto:joshsauder@gmail.com" title="Send me an email"><i className="fa fa-envelope fa-lg btn-social"></i></a>
                </div>
              </Slide>
              <Slide top duration={2000}>
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
