import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Slide from 'react-reveal/Slide';
import ContactForm from './ContactForm';
import {Jumbotron, Button, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ProjectList from '../data/projects.json';

import InTheClear from '../images/InTheClear.png';
import InTheClearWhite from '../images/InTheClearFill.png'
import logoShot from '../images/WebsiteLogo.png';
import appStore from '../images/appStore.svg'
import PathFinder from '../images/PathFinder.png'


function createList(item){
  return (<Nav.Link eventKey={item.eventKey} key={item.eventKey} className="navNotActive">{item.name}</Nav.Link>)
}


function ListItem({project}) {
  if(project.items.length > 1){
    let show = false
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" role="button" onClick={() => {show=true}}>{project.name}</a>
        {show &&
          project.items.map(item => createList(item))
        }
      </li>
    )
  }else {
    return createList(project.items[0])
  }
}

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
              <div className="mt-3 container row">
                <Button variant="outline-secondary" className="mr-2 mb-2" target="_blank" rel="noopener noreferrer" href={list.github}><FontAwesomeIcon className="github" icon={['fab', 'github']}/> Github Repo</Button>
                <Button variant="outline-secondary" className="mr-2 mb-2" onClick={() => this.setState({ modal: true, title: `${list.name} Feedback`, alert: false})} title={"Give Feedback on" + list.name}>Feedback</Button> 
                {list.appStore && 
                  <div className="mb-2">
                  <a href={list.appStore} target="_blank" rel="noopener noreferrer" title="Link to In The Clear's App Store page" className="mr-3">
                     <img alt="App Store Link" src={appStore}></img>
                  </a>
                  </div>
                }
                {
                  list.project &&
                  <React.Fragment>
                    <Button variant="outline-secondary" className="mr-2 mb-2" target="_blank" rel="noopener noreferrer" href={list.project}>Website</Button>
                    { list.article && <Button variant="outline-secondary" className="mb-2" target="_blank" rel="noopener noreferrer" href={list.article}><FontAwesomeIcon className="github" icon={['fab', 'medium']}/> Article</Button> }
                  </React.Fragment>
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
      project = this.renderProject(ProjectList[0].items[0], InTheClear)      
    }else if(this.state.show === "InTheClearWeb"){
      project = this.renderProject(ProjectList[0].items[1], InTheClearWhite)
    }else if(this.state.show === "InTheClearMain"){
      project = this.renderProject(ProjectList[0].items[2], InTheClear)
    }else if(this.state.show === "PathFinder"){
      project = this.renderProject(ProjectList[1].items[0], PathFinder)
    }else if(this.state.show === "PersonalWebsite"){
      project = this.renderProject(ProjectList[2].items[0], logoShot)
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
                        <ListItem project={project} />
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
