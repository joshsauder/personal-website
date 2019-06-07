import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <p>I am currently working with customers to complete any projects they are currently working on related to our products (system migrations, upgrades, new data endpoints, etc), and solving any issues they run into. This typically involves replicating what they are trying to accomplish, or re-creating the issue they are experiencing.</p>
          <p>Customers also come up with ways to use our product in ways that have not been done yet, and it's my job to test it in the manner they want to use it and ensure that I can provide adequate support.</p>
          <p>Technologies used:</p>
          <ul>
            <li>MSSQL, Oracle SQL, MySQL</li>
            <li>Replicating data from an HPE NonStop to another HPE Nonstop, Amazon AWS, Oracle, SQL Server, Splunk.</li>
          </ul>
          <p>On top of the above list, this job really involves a lot of communication. I have numerous meetings with customers (both scheduled and after-hours when an outage occurs, or production issue occurs), and this job requires you to able to quickly identify the issue at hand and find a resolution. It also requires you to be able to explain technical detail in a concise and efficient manner.</p>
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
