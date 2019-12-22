import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import JobList from '../data/jobModal.json'

/*
Populates each Modal with paragraph items 
*/
function PopulateList(props){
  var ntiList = props.list
  const populatedList = ntiList.map((item, index) =>
    <p key={index}>
      {item}
    </p>
  )
  return populatedList
}

/*
Populates each list 
*/
function PopulateTechList(props){
  var ntiTechList = props.list
  const populatedList = ntiTechList.map((item, index) =>
  <li key={index}>
    {item}
  </li>
  )
  return(
    <ul>{populatedList}</ul>
  );
}

class ExperienceModal extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      NTIShow: props.modal, 
    };

 }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal !== prevState.NTIShow){
        return {
            NTIShow: nextProps.modal 
        }
    }else {
        return null;
    }
  }


  render() {
    return (
      <Modal show={this.state.NTIShow} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="modal-p">{JobList[this.props.index].title}</p>
            <p className="modal-p">{JobList[this.props.index].date}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopulateList list={this.props.jobDescription[0]} />
          <PopulateTechList list={this.props.jobDescription[1]} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.props.onHide} title="Close pop-up window">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
   }
}

export default ExperienceModal;
