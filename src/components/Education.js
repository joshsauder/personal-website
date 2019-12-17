import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Slide from 'react-reveal/Slide';
import ExperienceModal from './ExperienceModal';
import EducationList from "../data/education.json"
import {OSUModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  console.log(props.list)
  const populatedList = props.list.map((item, index) =>
    <div className="lead col-md-4" key={index}>
      <h3>{item.title}</h3> 
      {item.description.map(description => 
        <p>{description}</p>
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
    let OSUClose = () => this.setState({ OSUShow: false });

    return (
      <div id={this.props.id}>
        {/* Index based on location in JSON */}
        <ExperienceModal modal={this.state.OSUShow} onHide={OSUClose} jobDescription={OSUModalData} index={4}/>
        <h1 className="text-center text-white">Education</h1>
        <div className="container marketing">
          <Slide left>
            <Jumbotron>
              <div className="featurette row">
                <PopulateList list={EducationList}/>
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
