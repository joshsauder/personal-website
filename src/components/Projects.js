import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Slide from 'react-reveal/Slide';
import ContactForm from './ContactForm';
import {Jumbotron, Button, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import InTheClear from '../images/InTheClear.png';
import logoShot from '../images/WebsiteLogo.png';
import appStore from '../images/appStore.svg'
import ProjectList from '../data/projects.json';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {show: "InTheClear", modal: false, title: "", alert: false}
  }

  /*
  Renders each project
  list - project list from ProjectList
  logo - applicable image
  */
  renderProject = (list, logo) => {
    return (
      <div className="tab-pane fade show active" id={list.name} role="tabpanel">
          <div className="row">
            <div className="col-lg-8">
              <div className="lead">
                {list.description}
              </div>
              <div className="lead mt-3">
                {list.techStack}
              </div>
              <div className="mt-3">
                <Button variant="outline-secondary" className="mr-2 mb-2 mb-md-0" target="_blank" href={list.github}><FontAwesomeIcon icon={['fab', 'github']}/> Github Repo</Button>
                <Button variant="outline-secondary" className="mr-2 mb-2 mb-md-0" onClick={() => this.setState({ modal: true, title: `${list.name} Feedback`, alert: false})} title={"Give Feedback on" + list.name}>Feedback</Button> 
                {list.name === "In The Clear" && 
                  <a href="https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8" target="_blank" rel="noopener noreferrer" title="Link to In The Clear's App Store page" className="mr-3">
                     <img alt="App Store Link" src={appStore}></img>
                  </a>
                }
              </div>
            </div>
            <div className="col-lg-4 mt-2 mt-lg-2"> 
              <div className="featurette-img-align">
                  <img className="featurette-image img-fluid mx-auto rounded" alt="Logo" src={logo}></img>
              </div>
            </div>
          </div>
      </div>
    )
  }
  render() {

    let project;
    //Render the selected project
    if(this.state.show === "InTheClear"){
      project = this.renderProject(ProjectList[0], InTheClear)      
    }else if(this.state.show === "InTheClearWeb"){
      project = this.renderProject(ProjectList[1], InTheClear)
    }else if(this.state.show === "PersonalWebsite"){
      project = this.renderProject(ProjectList[2], logoShot)
    }

    let modalClose = () => this.setState({ modal: false });

    return (
      <div id={this.props.id}>
        <ContactForm modal={this.state.modal} onHide={modalClose} title={this.state.title} alert={this.state.alert} onClose={modalClose}/>
        <div className="featurette-divider"></div>
        <div className="container marketing">
          <Slide left>
              <Jumbotron className="shadow-lg">
                <h1 className="text-center chewy-font mb-4">Projects</h1>
                <div className="row">
                  <div className="col-lg-3">
                    <Nav className="flex-column" variant="pills" defaultActiveKey="InTheClear" onSelect={selectedKey => this.setState({show: `${selectedKey}`})}>
                      {ProjectList.map(project => 
                        <Nav.Link eventKey={project.eventKey} key={project.eventKey} className="navNotActive">{project.name}</Nav.Link>
                      )}
                    </Nav>
                  </div>
                    <div className="col-lg-9">
                      <div className="tab-content" id="tabContent">
                        {project}
                      </div>
                    <div>
                    </div>
                  </div>
                </div>
              </Jumbotron>
            </Slide>
            <div className="featurette-divider"/>
        </div>
      </div>
    );
  }
}

export default Projects;
