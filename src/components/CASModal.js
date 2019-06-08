import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {CASModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  var casList = props.list
  const populatedList = casList.map((item, index) =>
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
  var casTechList = props.list
  const populatedList = casTechList.map((item, index) =>
  <li key={index}>
    {item}
  </li>
  )
  return(
    <ul>{populatedList}</ul>
  );
}

class CASModal extends Component {

  constructor(props) {
    super(props)
    this.state = { CASShow: props.modal };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal !== prevState.CASShow){
        return {
            CASShow: nextProps.modal 
        }
    }else {
        return null;
    }
}

  render() {
    return (
      <Modal show={this.state.CASShow} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Chemical Abstract Services - May 2017 - May 2018</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopulateList list={CASModalData[0]} />
          <p>Technologies used:</p>
          <PopulateTechList list={CASModalData[1]} />
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

export default CASModal;
