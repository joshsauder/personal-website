import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <p>I primarily worked with Microsoft SQL Server creating SQL scripts, and business reports using SSRS. </p>
          <p>I also tested an in-house application looking for various bugs.</p>
          <p>Technologies used:</p>
          <ul>
              <li>MSSQL</li>
              <li>SQL Server and SQL Server Reporting Services</li>
          </ul>
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

export default XPOModal;
