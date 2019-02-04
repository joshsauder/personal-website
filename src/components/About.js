import React, { Component } from 'react';
import MarathonPhoto from '../IMG_0138.png';
import GradPhoto from '../IMG_0028.png';
import '../App.css';
import Navigation from './Navigation';

class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="featurette-divider"></div>
        <div className="container marketing">
          <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Professionally</h2>
                    <p className="lead">B.S. Computer Science Engineering - The Ohio State University</p>
                    <p className="lead">Software Engineer - Network Technologies International</p>
                    <p className="lead">I am currently working with customers, and solving any issues they run into. This typically involves replicating there issue and reporting this to developers. Customers also come up with ways to use our product that have not been done yet, and it's my job to test it in the manner they want to use it and ensure that I can provide addiquite support.</p>
                    <p className="lead">This job invovles the use of SQL, SQL Server, AWS, Oracle DB, creating XML and XSLT stylesheets, replicating data to HPE NonStop Servers, and, most importantly, your communication skills.</p>
                    <p className="lead">Internships/Co-Ops - Chemical Abstract Services and XPO Logistics</p>
                    <p>Chemical Abstracts Services - I was a web developer working on a in-house web app. During this Co-Op, I used AngularJS, Spring Boot, and Java.</p>
                    <p>XPO Logistics - I primarily worked with Microsoft SQL Server creating SQL scripts, and business reports using SSRS. I also tested an in-house application looking for various bugs.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={GradPhoto}></img>
                </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Personally</h2>
                    <p className="lead">Born in Pettisville, OH (Toledo area). Graduated from Pettisville with a class of 50. Pretty small right. One of the things that you are taught when you grow up here is the value of hard work. Most people in the community are farmers who have to work hard to make ends meet.</p>
                    <p className="lead">Self-proclaimed running fanatic. I've run 2 full marathons, 3 half marathons, and numerous 5ks and 10ks. If you're wondering what I'm doing after work, there's a good chance I'm out running.</p>
                    <p className="lead">Huge Ohio State Buckeye fan. I love watching OSU football and basketball whether I'm at the game, or watching it on TV.</p>                      <p className="lead">I also love traveling. I also find it interesting to visit a new city and try there cuisine, and visit various landmarks throughout the city.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={MarathonPhoto}></img>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default About;
