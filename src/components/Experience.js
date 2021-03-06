import React, {Component} from 'react';
import ExperienceModal from './ExperienceModal';
import Slide from 'react-reveal/Slide';
import { Jumbotron, Button } from 'react-bootstrap';
import jobModal from '../data/jobModal.json';
import {MinderaModalData, NTIModalData, CASModalData, OpenDemiaModalData} from '../data/modal';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MinderaModal: false,
            NTIModal: false,
            ODModal: false,
            CASModal: false,
        };
    }

    /*
    Renders each experience item
    list - given list item from jobModal
    */
    populateList = (list) => {
      return list.slice(0,4).map((item, index) =>
        <div className="lead col-md-3 text-center mt-5" key={index}>
          <FontAwesomeIcon icon={item.icon} size="2x" />
          <h4 className="mt-4">{item.title}</h4> 
          <p className="mt-4">{item.company}</p>
          <p>{item.date}</p>
          <Button variant="outline-secondary" onClick={() => {this.setState({[item.modal]: true})}}>More Info</Button>
        </div>
      )
    }

    render(){
        let MinderaClose = () => this.setState({MinderaModal: false})
        let NTIClose = () => this.setState({ NTIModal: false });
        let ODClose = () => this.setState({ ODModal: false });
        let CASClose = () => this.setState({ CASModal: false });
        
        return (
            <div id={this.props.id}>
              <ExperienceModal modal={this.state.MinderaModal} onHide={MinderaClose} jobDescription={MinderaModalData} index={0} />
              <ExperienceModal modal={this.state.ODModal} onHide={ODClose} jobDescription={OpenDemiaModalData} index={1} />
              <ExperienceModal modal={this.state.NTIModal} onHide={NTIClose} jobDescription={NTIModalData} index={2} />
              <ExperienceModal modal={this.state.CASModal} onHide={CASClose} jobDescription={CASModalData} index={3}/>
              <div className="container marketing">
                  <Slide right>
                      <Jumbotron className="shadow-lg">
                          <h1 className="text-center chewy-font">Work Experience</h1>
                          <div className="featurette row">
                              {this.populateList(jobModal)}
                          </div>
                      </Jumbotron>
                  </Slide>
                  <hr className="featurette-divider"/>
              </div>
          </div>
        )
    }
}

export default Experience;