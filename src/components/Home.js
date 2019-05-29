import React, { Component } from 'react';
import '../App.css';
import '../styles/Home.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Navigation from './Navigation';
import Logo from '../images/logo.png';
import ParticlesBackground from '../components/particles';

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={this.props.id}>
        <Navigation />
        <div className="col-12 fill-screen">
              <ParticlesBackground />
              <div className="mt-8">
                <Bounce left>
                  <img className="mx-auto d-block img-responsive" src={Logo}></img>
                </Bounce>
                <div className="row justify-content-center">
                  <Slide top>
                  <div className="col-1">
                    <a href="mailto:joshsauder@gmail.com" title="Email"><i className="fa fa-envelope fa-lg btn-social"></i></a>
                  </div>
                  </Slide>
                  <Slide top>
                  <div className="col-1">
                    <a href="www.linkedin.com/in/josh-sauder-5231a1106" title="LinkedIn Profile"><i className="fa fa-linkedin fa-lg btn-social"></i></a>
                  </div>
                  </Slide>
                </div>
                <h2 className="text-center text-white mt-5">Let&rsquo;s build something that brings a positive impact on the world!</h2>
              </div>
        </div>
      </div>
    );
  }
}

export default Home;
