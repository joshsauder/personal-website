import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import ContactForm from './ContactForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
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
              <Jumbotron>
              <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">In The Clear</h2>
                        <PopulateList list={InTheClearList} />
                        <p className="lead">Planned Updates:</p>
                        <PopulatePlansList list={InTheClearPlansList} />
                        <p>
                          <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "In The Clear Request", alert: false})} title="Request source code">Source Code Request</Button>
                          <Button variant="outline-secondary" className="mr-3" onClick={() => this.setState({ show: true, title: "In The Clear Feedback", alert: false})} title="Give feedback on In The Clear">Feedback</Button>
                          <a href="https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8" target="_blank" rel="noopener noreferrer" title="Link to In The Clear's App Store page" className="mt-3">
                            <img alt="App Store Link" src={appStore}></img>
                          </a>
                        </p>
                    </div>
                    <div className="col-md-5 featurette-img-align">
                        <img className="featurette-image img-fluid mx-auto rounded" alt="In The Clear Logo" src={InTheClear}></img>
                    </div>
                </div>
              </Jumbotron>
          </Slide>
            <Slide right>
                <Jumbotron>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Personal Website</h2>
                        <PopulateList list={PersonalWebsiteList} />
                        <p>
                          <Button variant="outline-secondary" className="mr-3"  href="https://bitbucket.org/joshsauder/personal-webpage/src/master/" target="_blank" rel="noopener noreferrer" title="Link to source code">Source Code</Button>
                          <Button variant="outline-secondary" className="mr-3"  onClick={() => this.setState({ show: true, title: "Website Feedback", alert: false})} title="Give feedback on my website">Feedback</Button>
                        </p>
                    </div>
                    <div className="col-md-5 featurette-img-align">
                        <img className="featurette-image img-fluid mx-auto rounded" alt="Personal Logo" src={logoShot}></img>
                    </div>
                </div>
                </Jumbotron>
            </Slide>
            <Slide left>
              <Jumbotron>
                <div className="row featurette">
                  <div className="col-md-7">
                    <h2 className="featurette-heading">In The Clear Web App <span className="text-muted">Coming Soon!</span></h2>
                    <PopulateList list={InTheClearWebList} />
                  </div>
                  <div className="col-md-5 featurette-img-align">
                    <img className="featureete-image img-fluid mx-auto rounded" alt="In The Clear Logo" src={InTheClear}></img>
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
