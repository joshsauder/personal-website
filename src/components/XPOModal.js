import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {XPOModalData} from "../data/modal"

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  var xpoList = props.list
  const populatedList = xpoList.map((item, index) =>
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
  var xpoTechList = props.list
  const populatedList = xpoTechList.map((item, index) =>
  <li key={index}>
    {item}
  </li>
  )
  return(
    <ul>{populatedList}</ul>
  );
}

class XPOModal extends Component {

  constructor(props) {
    super(props)
    this.state = { XPOShow: props.modal };
  }


  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal !== prevState.XPOShow){
        return {
            XPOShow: nextProps.modal 
        }
    }else {
        return null;
    }
}
  

  render() {
    return (
      <Modal show={this.state.XPOShow} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>XPO Logistics- June 2016 - August 206</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopulateList list={XPOModalData[0]} />
          <p>Technologies used:</p>
          <PopulateTechList list={XPOModalData[1]} />
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

export default XPOModal;
