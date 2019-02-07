import React, { Component } from 'react';
import logo from '../logo.svg';
import InTheClear from '../InTheClear.png';
import ReactLogo from '../React.png';
import '../App.css';
import Navigation from './Navigation';
import ContactFrom from './contactFrom';

class Projects extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="featurette-divider"></div>
        <div className="container marketing">
          <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">In The Clear</h2>
                    <p className="lead">Allows the user to determine what weather conditions they will be experiencing during their travels</p>
                    <p className="lead">Includes a drop-down menu that shows the user, city by city, what weather and what temperatures they should expect</p>
                    <p className="lead">I've always had a fascination for meterology. A common problem with living in the midwest is that when you travel, you can experience a variety of different weather conditions. This app solves this issue by telling the user what types of weather they will experience during their travels.</p>
                    <p className="lead">Built using Swift</p>
                    <p className="lead">Podfiles used include Google Maps, Google Places, AlamoFire, and SwiftlyJSON</p>
                    <button type="button" class="btn btn-success" onClick={this.showModal}>Request Access of Source Code</button>
                    <ContactForm />
                    <button type="button" class="btn btn-warning" onClick={this.showModal}>Feedback</button>
                    <ContactForm />
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={InTheClear}></img>
                </div>
          </div>

          <hr className="featurette-divider"/>
          <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Personal Website</h2>
                    <p className="lead">A website that shows what I've done both professionally and in my free time</p>
                    <p className="lead">I've always enjoyed web development and a personal web page is something that I thought wouldn't be a bad thing to have</p>
                    <p className="lead">It's basically a great way to find out what I've done, and an easy way to get to know me.</p>
                    <p className="lead">Build using ReactJS, Bootstrap, Webpack, and NodeJS</p>
                    <button type="button" class="btn btn-success" onClick={this.showModal}>Request Access of Source Code</button>
                    <ContactForm />
                    <button type="button" class="btn btn-warning" onClick={this.showModal}>Feedback</button>
                    <ContactForm />
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={ReactLogo}></img>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
