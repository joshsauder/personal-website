import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import InTheClear from '../images/InTheClear.png';
import logoShot from '../images/logoSceenShot.png';
import appStore from '../images/appStore.svg'
import ContactForm from './ContactForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false, title: ""}
  }
  render() {
    let modalClose = () => this.setState({ show: false });

    return (
      <div id={this.props.id}>
        <ContactForm modal={this.state.show} onHide={modalClose} title={this.state.title} />
        <div className="featurette-divider"></div>
        <h1 className="text-center text-white mt-5">My Projects</h1>
        <div className="container marketing">
        <Slide left>
        <div className= "shadow mb-5">
          <Jumbotron>
          <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">In The Clear</h2>
                    <p className="lead">Allows the user to determine what weather conditions they will be experiencing during their travels</p>
                    <p className="lead">Includes a drop-down menu that shows the user, city by city, what weather and what temperatures they should expect</p>
                    <p className="lead">I've always had a fascination for meterology. A common problem with living in the midwest is that when you travel, you can experience a variety of different weather conditions. This app solves this issue by telling the user what types of weather they will experience during their travels.</p>
                    <p className="lead">Built using Swift</p>
                    <p className="lead">Podfiles used include Google Maps, Google Places, AlamoFire, and SwiftlyJSON</p>
                    <p className="lead">Planned Updates</p>
                    <ul>
                      <li>Implement a backend API to limit the number of API calls the users device has to make.</li>
                      <li>Allow the user to plan stops (overnight hotel stay) along the way.</li>
                      <li>Give the user the option to input a planned start time so they can plan ahead.</li>
                      <li>Tell the user if they will experience any severe weather (blizzard conditions, or severe storms) along the way.</li>
                    </ul>
                    <p>
                      <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "InTheClear Request"})}>Source Code Request</Button>
                      <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "InTheClear Feedback"})}>Feedback</Button>
                      <a href="">
                        <img src={appStore}></img>
                      </a>
                    </p>
                </div>
                <div className="col-md-5 featurette-img-align">
                    <img className="featurette-image img-fluid mx-auto rounded" src={InTheClear}></img>
                </div>
            </div>
          </Jumbotron>
        </div>
        </Slide>
        <Slide right>
          <div className= "shadow mb-5">
            <Jumbotron>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Personal Website</h2>
                    <p className="lead">A website that shows what I've done both professionally and in my free time</p>
                    <p className="lead">I've always enjoyed web development and a personal web page is something that I thought wouldn't be a bad thing to have</p>
                    <p className="lead">It's basically a great way to find out what I've done, and an easy way to get to know me.</p>
                    <p className="lead">Build using ReactJS, Bootstrap, Webpack, and NodeJS</p>
                    <p>
                      <Button variant="outline-secondary" className="mr-3"  onClick={() => this.setState({ show: true, title: "Website Request"})}>Source Code</Button>
                      <Button variant="outline-secondary" className="mr-3"  onClick={() => this.setState({ show: true, title: "Website Feedback"})}>Feedback</Button>
                    </p>
                </div>
                <div className="col-md-5 featurette-img-align">
                    <img className="featurette-image img-fluid mx-auto rounded" src={logoShot}></img>
                </div>
            </div>
            </Jumbotron>
          </div>
        </Slide>
        </div>
      </div>
    );
  }
}

export default Projects;
