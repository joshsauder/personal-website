import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Slide from 'react-reveal/Slide';
import GradPhoto from '../images/IMG_0138.png';
import Selfie from '../images/SelfImage.png';
import NTIModal from './NTIModal';
import CASModal from './CASModal';
import XPOModal from './XPOModal';
import OSUModal from './OSUModal';

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
        <Slide left>
        <div className= "col-md-8">
            <Jumbotron>
              <div className="featurette row">
                  <div className="col-md-7">
                      <h2 className="featurette-heading">Professionally</h2>
                      <p className="lead">My goal, as a developer, is to create applications that better the users life. I truely believe applications can positively impact a persons life and help make the world a better place.</p>
                      <p className="lead">I've always been a curious person and learning a new skill has never been something I've shied away from. It always me to increase my knowledge set, and broadens my horizons.</p>
                  </div>
                  <div className="col-md-5 featurette-img-align">
                      <img className="featurette-image img-fluid mx-auto rounded" src={GradPhoto}></img>
                  </div>
              </div>
            </Jumbotron>
        </div>
        </Slide>
        <Slide right>
        <div className= "col-md-4">
            <Jumbotron> 
              <div className="row featurette">
                <div className="col-md-12">
                  <h2 className="featurette-heading">Experience</h2>
                  <button type ="button" className="btn btn-clear text-left" onClick={() => this.setState({ OSUShow: true })}>B.S. Computer Science Engineering - The Ohio State University</button>
                  <button type ="button" className="btn btn-clear text-left" onClick={() => this.setState({ NTIShow: true })}>Software Engineer - Network Technologies International</button>
                  <button type ="button" className="btn btn-clear text-left" onClick={() => this.setState({ CASShow: true })}>Chemical Abstract Services - Software Engineering Co-Op</button>
                  <button type ="button" className="btn btn-clear text-left" onClick={() => this.setState({ XPOShow: true })}>XPO Logistics - IT Intern</button>
                </div>
              </div>  
            </Jumbotron>
        </div>
        </Slide>
      </div>  
      <div className="row">
        <Slide left>
          <div className="col-md-8">
            <Jumbotron>
              <div className="featurette row">
                <div className="col-md-12">
                  <h2 className="featurette-heading">What I Know</h2>
                  <p className="lead">Languages and Frameworks - Javascript, AngularJS, HTML5, CSS, Bootstrap, ExpressJS, MSSQL, MySQL, Java, C++, Swift</p>
                  <p className="lead">IDE/Text Editor - XCode, IntelliJ, Visual Studio Code, Eclipse</p>
                  <p className="lead">Version Control - Git</p>
                  <p className="lead">Project Management - Jira, Trello, Mantis</p>
                </div>
              </div>
            </Jumbotron>
          </div>
        </Slide>
        <Slide right>
          <div className="col-md-4">
            <Jumbotron>
              <div className="featurette row">
                <div className="col-md-12">
                  <h2 className="featurette-heading">What I'm Learning</h2>
                  <p className="lead">Currently - NodeJS, ReactJS, XCTest</p>
                  <p className="lead">Upcoming - MongoDB, GraphQL, Gulp</p>
                </div>
              </div>
            </Jumbotron>
          </div> 
        </Slide>
      </div>
      <Slide left>
      <div className= "shadow mb-3">
          <Jumbotron>
            <div className="row featurette">
                  <div className="col-md-7">
                      <h2 className="featurette-heading">Personally</h2>
                      <p className="lead">Born in Pettisville, OH (Toledo area). Graduated from Pettisville with a class of 50. Pretty small right!</p>
                      <p className="lead">In my free-time you'll most likely find me, outside running. I'm sort of a self-proclaimed running fanatic. I've run 2 full marathons, 3 half marathons, and numerous 5ks and 10ks. If you're wondering what I'm doing after work, there's a good chance I'm out running.</p>
                      <p className="lead">I also love traveling and exploring new places. I've always enjoyed venturing to new places and trying new foreign cuisines.</p>
                      <p className="lead">Finally, I'm a huge Ohio State Buckeye fan. I love watching OSU football and basketball whether I'm at the game, or watching it on TV.</p>
                  </div>
                  <div className="col-md-5 featurette-img-align">
                      <img className="featurette-image img-fluid mx-auto rounded" src={Selfie}></img>
                  </div>
              </div>
          </Jumbotron>
      </div>
      </Slide>
      <Slide right>
        <Jumbotron>
            <div className="row featurette">
              <div className="col-md-12">
                <h2 className="featurette-heading">Volunteer Work</h2>
                <p className="lead">I've always been a firm believer that volunteer work is a vital aspect of a persons life. Not only for the personal benefits, but also because it benefits the communities involved.</p>
                <p className="lead">I've always enjoyed helping those with special needs, and always loved participating in athletics. I also noticed that those with special needs werent't always given the opportunity to participate in athletics.</p>
                <p className="lead">I recently started volunteering at Special Olympic events and absolutely love watching these individuals do things that others told them they couldn't. The encouragement and support they are given by the fans and volunteers is always a fun and gives the athletes an environment were they can be proud of there achievements.</p>
              </div>
            </div>
        </Jumbotron>
      </Slide>
      <hr className="featurette-divider"/>
      </div>
      </div>
    );
  }
}

export default About;
