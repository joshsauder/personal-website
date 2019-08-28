import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Slide from 'react-reveal/Slide';
import ExperienceModal from './ExperienceModal';
import GradPhoto from '../images/IMG_0138.png';
import Selfie from '../images/SelfImage.png';
import {ProfessionalList, WhatIKnowList, WhatImLearningList, PersonalList, VolunteerWorkList} from '../data/personal.js';
import {NTIModalData, CASModalData, OpenDemiaModalData ,XPOModalData, OSUModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  const populatedList = props.list.map((item, index) =>
    <p className="lead" key={index}>
      {item}
    </p>
  )
  return populatedList
}

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NTIShow: false,
      ODShow: false,
      CASShow: false,
      XPOShow: false,
      OSUModal: false,
    };
  }
  render() {
    let NTIClose = () => this.setState({ NTIShow: false });
    let ODClose = () => this.setState({ ODShow: false });
    let CASClose = () => this.setState({ CASShow: false });
    let XPOClose = () => this.setState({ XPOShow: false });
    let OSUClose = () => this.setState({ OSUShow: false });

    return (
      <div id={this.props.id}>
        {/* Index based on location in JSON */}
        <ExperienceModal modal={this.state.NTIShow} onHide={NTIClose} jobDescription={NTIModalData} index={0} />
        <ExperienceModal modal={this.state.ODShow} onHide={ODClose} jobDescription={OpenDemiaModalData} index={1} />
        <ExperienceModal modal={this.state.CASShow} onHide={CASClose} jobDescription={CASModalData} index={2}/>
        <ExperienceModal modal={this.state.XPOShow} onHide={XPOClose} jobDescription={XPOModalData} index={3}/>
        <ExperienceModal modal={this.state.OSUShow} onHide={OSUClose} jobDescription={OSUModalData} index={4}/>
        <h1 className="text-center text-white">About Me</h1>
        <div className="container marketing">
          <div className="row ">
            <Slide left>
              <div className= "col-md-8">
                  <Jumbotron>
                    <div className="featurette row">
                        <div className="col-md-7">
                          <h2 className="featurette-heading">Professionally</h2>
                          <PopulateList list={ProfessionalList} />
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
                        <Button variant="outline-secondary" className="text-left mb-3" onClick={() => this.setState({ OSUShow: true })} title="More info on my time at OSU">B.S. Computer Science Engineering - The Ohio State University</Button>
                        <Button variant="outline-secondary" className=" text-left mb-3" onClick={() => this.setState({ NTIShow: true })} title="More info on my time at Network Technologies Internation">Software Engineer - Network Technologies International</Button>
                        <Button variant="outline-secondary" className=" text-left mb-3" onClick={() => this.setState({ ODShow: true })} title="More info on my time at OpenDemia">Part-Time Developer - OpenDemia</Button>
                        <Button variant="outline-secondary" className=" text-left mb-3" onClick={() => this.setState({ CASShow: true })} title="More info on my time at Chemical Abstract Services">Chemical Abstract Services - Software Engineering Co-op</Button>
                        <Button variant="outline-secondary" className=" text-left" onClick={() => this.setState({ XPOShow: true })} title="More info on my time at XPO Logistics">XPO Logistics - IT Intern</Button>
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
                      <PopulateList list={WhatIKnowList} />
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
                      <PopulateList list={WhatImLearningList} />
                    </div>
                  </div>
                </Jumbotron>
              </div> 
            </Slide>
          </div>
          <Slide left>
                <Jumbotron>
                  <div className="row featurette">
                      <div className="col-md-7">
                        <h2 className="featurette-heading">Personally</h2>
                        <PopulateList list={PersonalList} />
                      </div>
                      <div className="col-md-5 featurette-img-align">
                        <img className="featurette-image img-fluid mx-auto rounded" alt="Personal" src={Selfie}></img>
                      </div>
                  </div>
                </Jumbotron>
          </Slide>
          <Slide right>
            <Jumbotron>
                <div className="row featurette">
                  <div className="col-md-12">
                    <h2 className="featurette-heading">Volunteer Work</h2>
                    <PopulateList list={VolunteerWorkList} />
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
