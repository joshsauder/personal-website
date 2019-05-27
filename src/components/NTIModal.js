import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

class NTIModal extends Component {

  constructor(props) {
    super(props)
    this.state = { NTIShow: props.modal };
 }

 componentWillReceiveProps(nextProps){
  if(this.state.NTIShow!==nextProps.modal){
    this.setState({NTIShow: nextProps.modal})
  }
}


  render() {
    return (
      <Modal show={this.state.NTIShow} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>NTI - June 2018 - Present</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>I am currently working with customers, and solving any issues they run into. This typically involves replicating and identifying the issue/bug.</p>
          <p>Customers also come up with ways to use our product that have not been done yet, and it's my job to test it in the manner they want to use it and ensure that I can provide addiquite support.</p>
          <p>Technologies used:</p>
          <ul>
              <li>MSSQL, Oracle SQL, MySQL</li>
              <li>Replicating data from an HPE NonStop to another HPE Nonstop, Amazon AWS, and SQL Server.</li>
          </ul>
          <p>On top of the above list, this job really involves a lot of communication. I have numerous meetings with customers (both scheduled and after-hours when an outage occurs), and this job requires the ability to explain things in a concise and efficient manner.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.onHide} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
   }
}

export default NTIModal;
