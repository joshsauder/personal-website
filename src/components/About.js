import React, { Component } from 'react';
import MarathonPhoto from '../IMG_0138.png';
import GradPhoto from '../IMG_0028.png';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NTIModal from './NTIModal';
import CASModal from './CASModal';
import XPOModal from './XPOModal';
import OSUModal from './OSUModal'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NTIShow: false,
      CASShow: false,
      XPOShow: false,
      OSUModal: false,
    };
  }
  render() {
    let NTIClose = () => this.setState({ NTIShow: false });
    let CASClose = () => this.setState({ CASShow: false });
    let XPOClose = () => this.setState({ XPOShow: false });
    let OSUClose = () => this.setState({ OSUShow: false });

    return (
      <div id={this.props.id}>
        <NTIModal modal={this.state.NTIShow} onHide={NTIClose} />
        <CASModal modal={this.state.CASShow} onHide={CASClose} />
        <XPOModal modal={this.state.XPOShow} onHide={XPOClose} />
        <OSUModal modal={this.state.OSUShow} onHide={OSUClose} />
        <h1 className="text-center text-white mt-5">About Me</h1>
        <div className="container marketing">
        <div className="row ">
        <div className= "col-md-8 ml-3">
            <div className="featurette">
              <Jumbotron className="row">
                  <div className="col-md-7">
                      <h2 className="featurette-heading">Professionally</h2>
                      <p>My goal, as a developer, is to create applications that better the users life. I truely believe applications can positively impact a persons life and help make the world a better place.</p>
                      <p>I've always been a curious person and learning a new skill has never been something I've shied away from. It always me to increase my knowledge set, and broadens my horizons.</p>
                  </div>
                  <div className="col-md-5 featurette-img-align">
                      <img className="featurette-image img-fluid mx-auto" src={GradPhoto}></img>
                  </div>
                </Jumbotron>
            </div>
        </div>
        <div className= "col-md-3 ml-3">
            <div className="row featurette">
              <Jumbotron>
              <div className="col-md-12">
                <h2 className="featurette-heading">Experience</h2>
                <button type ="button" className="btn btn-clear" onClick={() => this.setState({ OSUShow: true })}>B.S. Computer Science Engineering - The Ohio State University</button>
                <button type ="button" className="btn btn-clear" onClick={() => this.setState({ NTIShow: true })}>Software Engineer - Network Technologies International</button>
                <button type ="button" className="btn btn-clear" onClick={() => this.setState({ CASShow: true })}>Chemical Abstract Services - Software Engineering Co-Op</button>
                <button type = "button" className="btn btn-clear" onClick={() => this.setState({ XPOShow: true })}>XPO Logistics - IT Intern</button>
              </div>
              </Jumbotron>
            </div>
        </div>
        </div>]


          <hr className="featurette-divider"/>

          <div className= "shadow mb-3">
            <Jumbotron>
            <div className="row featurette">
                  <div className="col-md-7">
                      <h2 className="featurette-heading">Personally</h2>
                      <p className="lead">Born in Pettisville, OH (Toledo area). Graduated from Pettisville with a class of 50. Pretty small right!</p>
                      <p className="lead">In my free-time you'll most likely find me, outside running. I'm sort of a self-proclaimed running fanatic. I've run 2 full marathons, 3 half marathons, and numerous 5ks and 10ks. If you're wondering what I'm doing after work, there's a good chance I'm out running.</p>
                      <p className="lead">I also love traveling and exploring new places. I've always enjoyed venturing to new places and trying new foreign cuisines.</p>
                      <p className="lead">Huge Ohio State Buckeye fan. I love watching OSU football and basketball whether I'm at the game, or watching it on TV.</p>
                  </div>
                  <div className="col-md-5 featurette-img-align">
                      <img className="featurette-image img-fluid mx-auto" src={MarathonPhoto}></img>
                  </div>
              </div>
              </Jumbotron>
            </div>
          </div>
      </div>
    );
  }
}

export default About;
