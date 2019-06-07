import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
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
        <h1 className="text-center text-white">About Me</h1>
        <div className="container marketing">
          <div className="row ">
            <Slide left>
              <div className= "col-md-8">
                  <Jumbotron>
                    <div className="featurette row">
                        <div className="col-md-7">
                          <h2 className="featurette-heading">Professionally</h2>
                          <p className="lead">My goal, as a developer, is to create applications that better the users life. I truely believe software can positively impact a persons life and help make the world a much better place!</p>
                          <p className="lead">One trait that has always helped me professionally is my curiosity. I've always been a curious person and learning a new skill has never been something I've shied away from. It has always helped me to increase my knowledge set, and broadens my horizons.</p>
                        </div>
                        <div className="col-md-5 featurette-img-align">
                          <img className="featurette-image img-fluid mx-auto rounded" alt="Graduation" src={GradPhoto}></img>
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
                        <Button variant="outline-secondary" className="text-left mb-3" onClick={() => this.setState({ OSUShow: true })}>B.S. Computer Science Engineering - The Ohio State University</Button>
                        <Button variant="outline-secondary" className=" text-left mb-3" onClick={() => this.setState({ NTIShow: true })}>Software Engineer - Network Technologies International</Button>
                        <Button variant="outline-secondary" className=" text-left mb-3" onClick={() => this.setState({ CASShow: true })}>Chemical Abstract Services - Software Engineering Co-Op</Button>
                        <Button variant="outline-secondary" className=" text-left" onClick={() => this.setState({ XPOShow: true })}>XPO Logistics - IT Intern</Button>
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
                      <p className="lead">Upcoming - MongoDB, Mocha, GraphQL, Gulp</p>
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
                        <p className="lead">I was born in Pettisville, OH (Toledo area), and graduated from Pettisville High School with a class of 50. Pretty small right!</p>
                        <p className="lead">I then went to and graduated from The Ohio State University. As you can probably imagine, there was a bit of culture shock going from a small school to a school the size of OSU.</p>
                        <p className="lead">In my free-time you'll most likely find me, outside running. I'm sort of a self-proclaimed running fanatic. I've run 2 full marathons, 3 half marathons, and numerous 5K and 10K races. If you're wondering what I'm doing after work, there's a good chance I'm out running.</p>
                        <p className="lead">I also love traveling and exploring new places. It forces me to get out of my confort zone and exposes me to new cuisines, and experiences. It also allows me to venture around and see various places and landmarks.</p>
                        <p className="lead">Finally, I'm a huge Ohio State Buckeye fan. I love watching OSU football and basketball whether I'm at the game, or watching it on TV.</p>
                      </div>
                      <div className="col-md-5 featurette-img-align">
                        <img className="featurette-image img-fluid mx-auto rounded" alt="Personal" src={Selfie}></img>
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
                    <p className="lead">I've always enjoyed helping those with special needs, and always loved participating in athletics. I also noticed that those with special needs werent't always given the opportunity to participate in athletics earlier.</p>
                    <p className="lead">I recently started volunteering at Special Olympic events and found it to be an awesome experience watching these individuals do things that others told them they couldn't. The encouragement and support they are given by the fans and volunteers is a fun sight to see, and gives the athletes an environment were they can be proud of there achievements.</p>
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
