import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import InTheClear from '../images/InTheClear.png';
import logoShot from '../images/logoScreenShot.png';
import appStore from '../images/appStore.svg'
import ContactForm from './ContactForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false, title: "", alert: false}
  }
  render() {
    let modalClose = () => this.setState({ show: false });

    return (
      <div id={this.props.id}>
        <ContactForm modal={this.state.show} onHide={modalClose} title={this.state.title} alert={this.state.alert} onClose={modalClose}/>
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
                    <p className="lead">Planned Updates:</p>
                    <ul>
                      <li className="lead">Implement a backend API to limit the number of API calls the users device has to make.</li>
                      <li className="lead">Allow the user to plan stops (overnight hotel stay) along the way.</li>
                      <li className="lead">Give the user the option to input a planned start time so they can plan ahead.</li>
                      <li className="lead">Tell the user if they will experience any severe weather (blizzard conditions, or severe storms) along the way.</li>
                    </ul>
                    <p>
                      <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "In The Clear Request", alert: false})}>Source Code Request</Button>
                      <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "In The Clear Feedback", alert: false})}>Feedback</Button>
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
                      <Button variant="outline-secondary" className="mr-3"  onClick={() => this.setState({ show: true, title: "Website Request", alert: false})}>Source Code</Button>
                      <Button variant="outline-secondary" className="mr-3"  onClick={() => this.setState({ show: true, title: "Website Feedback", alert: false})}>Feedback</Button>
                    </p>
                </div>
                <div className="col-md-5 featurette-img-align">
                    <img className="featurette-image img-fluid mx-auto rounded" src={logoShot}></img>
                </div>
            </div>
            </Jumbotron>
          </div>
        </Slide>
        <Slide left>
          <Jumbotron>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">In The Clear Web App <span className="text-muted">Coming Soon!</span></h2>
                <p className="lead">A web app that will give the user all the functionality of the In The Clear iOS app.</p>
                <p className="lead">It will be build using ReactJS, NodeJS, and most likely MongoDB </p>
                <p className="lead">It will also use Google Maps and Google Places similar to the iOS App.</p>
                <p className="lead">Since this app isn't free, I will need to implement a user sign-in component (using MongoDB) on both the web app and iOS app.</p>
              </div>
              <div className="col-md-5 featurette-img-align">
                <img className="featureete-image img-fluid mx-auto rounded" src={InTheClear}></img>
              </div>
            </div>
          </Jumbotron>
        </Slide>
        </div>
      </div>
    );
  }
}

export default Projects;
