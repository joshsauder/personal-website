import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import ContactForm from './ContactForm';
import {Jumbotron, Button, Nav} from 'react-bootstrap';
import InTheClear from '../images/InTheClear.png';
import logoShot from '../images/logoShot.png';
import appStore from '../images/appStore.svg'
import {InTheClearList, PersonalWebsiteList, InTheClearWebList, InTheClearPlansList} from '../data/projects';

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

/*
Populates each list 
*/
function PopulatePlansList(props){
  const populatedList = props.list.map((item, index) =>
  <li className="lead" key={index}>
    {item}
  </li>
  )
  return(
    <ul>{populatedList}</ul>
  );
}

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {show: "InTheClear"}
  }
  render() {
    let project;
    if(this.state.show === "InTheClear"){
      project = (
        <div className="tab-pane fade show active" id="InTheClear" role="tabpanel">
          <div className="lead">
            iOS App that allows the user to determine what weather conditions they should expect to experience during their travels
          </div>
          <Button variant="outline-secondary" href="" title="Give feedback on In The Clear">Github Repo</Button>
          <a href="https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8" target="_blank" rel="noopener noreferrer" title="Link to In The Clear's App Store page" className="mt-3">
              <img alt="App Store Link" src={appStore}></img>
          </a>
        </div>
      )
    }else if(this.state.show === "InTheClearWeb"){
      project = (
        <div className="tab-pane fade show active" id="InTheClearWeb" role="tabpanel">
          <div className="lead">
             A web app that will give the user all the functionality of the In The Clear iOS app
          </div>
          <Button variant="outline-secondary" href="" title="In The Clear Web Repo">Github Repo</Button>
        </div>
      )
    }else if(this.state.show === "PersonalWebsite"){
      project = (
        <div className="tab-pane fade show active" id="PersonalWebsite" role="tabpanel">
          <div className="lead">
            A website that shows what I've done both professionally and in my free time
          </div>
          <Button variant="outline-secondary" href="" title="In The Clear Web Repo">Github Repo</Button>
        </div>
      )
    }

    return (
      <div id={this.props.id}>
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
