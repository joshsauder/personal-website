import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {OSUModalData} from '../data/modal';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  var osuList = props.list
  const populatedList = osuList.map((item, index) =>
    <p key={index}>
      {item}
    </p>
  )
  return populatedList
}

/*
Populates each list 
*/
function PopulateCourseList(props){
  var courseList = props.list
  const populatedList = courseList.map((item, index) =>
  <li key={index}>
    {item}
  </li>
  )
  return(
    <ul>{populatedList}</ul>
  );
}

class OSUModal extends Component {

  constructor(props) {
    super(props)
    this.state = { OSUShow: props.modal };
  }


  static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.modal !== prevState.OSUShow){
          return {
              OSUShow: nextProps.modal 
          }
      }else {
          return null;
      }
  }

  render() {
    return (
      <Modal show={this.state.OSUShow} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>OSU - August 2014 - May 2018</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopulateList list={OSUModalData[0]} />
          <p>Coursework:</p>
          <PopulateCourseList list={OSUModalData[1]} />
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

export default OSUModal;
