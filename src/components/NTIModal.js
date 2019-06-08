import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {NTIModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
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

class NTIModal extends Component {

  constructor(props) {
    super(props)
    this.state = { NTIShow: props.modal };
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
          <Modal.Title>NTI - June 2018 - Present</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopulateList list={NTIModalData[0]} />
          <p>Technologies used:</p>
          <PopulateTechList list={NTIModalData[1]} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.onHide} title="Close pop-up window">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
   }
}

export default NTIModal;
