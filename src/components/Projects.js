import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import ContactForm from './ContactForm';
import {Jumbotron, Button, Nav} from 'react-bootstrap';
import InTheClear from '../images/InTheClear.png';
import logoShot from '../images/logoShot.png';
import appStore from '../images/appStore.svg'
import {InTheClearList, PersonalWebsiteList, InTheClearWebList, InTheClearPlansList} from '../data/projects';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {show: "InTheClear", modal: false, title: "", alert: false}
  }
  render() {
    let project;
    if(this.state.show === "InTheClear"){
      project = (
        <div className="tab-pane fade show active" id="InTheClear" role="tabpanel">
          <div className="row">
            <div className="col-md-8">
              <div className="lead">
                iOS App that allows the user to determine what weather conditions they should expect to experience during their travels
              </div>
              <Button variant="outline-secondary" href="" title="Give feedback on In The Clear">Github Repo</Button>
              <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ modal: true, title: "In The Clear Feedback", alert: false})} title="Give feedback on In The Clear">Feedback</Button>
              <a href="https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8" target="_blank" rel="noopener noreferrer" title="Link to In The Clear's App Store page" className="mt-3">
                  <img alt="App Store Link" src={appStore}></img>
              </a>
            </div>
            <div className="col-md-4"> 
              <div className="featurette-img-align">
                <img className="featurette-image img-fluid mx-auto rounded" alt="In The Clear Logo" src={InTheClear}></img>
              </div>
            </div>
          </div>
        </div>
      )
    }else if(this.state.show === "InTheClearWeb"){
      project = (
        <div className="tab-pane fade show active" id="InTheClearWeb" role="tabpanel">
          <div className="row">
            <div className="col-md-8">
              <div className="lead">
                A web app that will give the user all the functionality of the In The Clear iOS app
              </div>
              <Button variant="outline-secondary" className="mr-3" href="" title="In The Clear Web Repo">Github Repo</Button>
              <Button variant="outline-secondary" onClick={() => this.setState({ modal: true, title: "In The Clear Web Feedback", alert: false})} title="Give feedback on In The Clear Web">Feedback</Button>
            </div>
            <div className="col-md-4"> 
              <div className="featurette-img-align">
                <img className="featurette-image img-fluid mx-auto rounded" alt="In The Clear Logo" src={InTheClear}></img>
              </div>
            </div>
          </div>
        </div>
      )
    }else if(this.state.show === "PersonalWebsite"){
      project = (
        <div className="tab-pane fade show active" id="PersonalWebsite" role="tabpanel">
          <div className="row">
            <div className="col-md-8">
              <div className="lead">
                A website that shows what I've done both professionally and in my free time
              </div>
              <Button variant="outline-secondary" className="mr-3"  href="" title="Personal Website Repo">Github Repo</Button>
              <Button variant="outline-secondary" onClick={() => this.setState({ modal: true, title: "Personal Website Feedback", alert: false})} title="Give feedback on my Personal Website">Feedback</Button>
            </div>
            <div className="col-md-4 featurette-img-align">
              <img className="featurette-image img-fluid mx-auto rounded" alt="Personal Website Logo" src={logoShot}></img>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div id={this.props.id}>
        <ContactForm modal={this.state.modal} onHide={modalClose} title={this.state.title} alert={this.state.alert} onClose={modalClose}/>
        <div className="featurette-divider"></div>
        <h1 className="text-center text-white mt-5">My Projects</h1>
        <div className="container marketing">
          <Slide left>
              <Jumbotron>
                <div className="row">
                  <div className="col-3">
                    <Nav className="flex-column" variant="pills" onSelect={selectedKey => this.setState({show: `${selectedKey}`})}>
                      <Nav.Link eventKey="InTheClear">In The Clear</Nav.Link>
                      <Nav.Link eventKey="InTheClearWeb">In The Clear Web</Nav.Link>
                      <Nav.Link eventKey="PersonalWebsite">Personal Website</Nav.Link>
                    </Nav>
                  </div>
                    <div className="col-9">
                      <div className="tab-content" id="tabContent">
                        {project}
                      </div>
                    <div>
                    </div>
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
