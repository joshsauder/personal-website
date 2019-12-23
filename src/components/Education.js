import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import {Jumbotron, Button} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import ExperienceModal from './ExperienceModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EducationList from "../data/education.json"
import {OSUModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  const populatedList = props.list.map((item, index) =>
    <div className="lead col-md-4 text-center mt-4" key={index}>
      <FontAwesomeIcon icon={item.icon} size="2x" />
      <h4 className="mt-4 mb-4">{item.title}</h4> 
      {item.description.map((description, index) => 
        <p key={index}>{description}</p>
      )}
    </div>
  )
  return populatedList
}

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      OSUModal: false,
    };
  }
  render() {
    let OSUClose = () => this.setState({ OSUModal: false });

    return (
      <div id={this.props.id}>
        {/* Index based on location in JSON */}
        <ExperienceModal modal={this.state.OSUModal} onHide={OSUClose} jobDescription={OSUModalData} index={4}/>
        <div className="container marketing">
          <Slide left>
            <Jumbotron className="shadow-lg">
              <h1 className="text-center chewy-font">Education</h1>
              <div className="featurette row">
                <PopulateList list={EducationList}/>
              </div>
              <div className="row justify-content-center">
                <Button variant="outline-secondary" onClick={() => {this.setState({OSUModal: true})}}>Want to know more about my time at OSU?</Button>
              </div>
            </Jumbotron>
          </Slide>   
          <hr className="featurette-divider"/>
        </div>
      </div>
    );
  }
}

export default Education;
