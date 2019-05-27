import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

class CASModal extends Component {

  constructor(props) {
    super(props)
    this.state = { CASShow: props.modal };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal != prevState.CASShow){
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
            <Modal.Title>CAS - May 2017 - May 2018</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>I was a web developer working on a in-house web app.</p>
          <p>I was also given the opportunity to work on my own project to showcase what I learned during my Co-Op. I worked with an employee to had to manually call numerous web-services just to obtain a single ID. I ended up building a tool that allowed him to to do all this just by putting in his inital ID and would return a list of ID's that he may need. He also requested that I give him the option to output a Excel spreadsheet of any associated ID's with other applicable data. I ended up implementing this feature through the use of an Apache framework.</p>
          <p>Technologies used:</p>
          <ul>
              <li>Front-End: AngularJS, bootstrap, Gulp (Automated Development Workflow)</li>
              <li>Back-End: Spring, Spring Boot, Java EE</li>
              <li>Testing: JUnit, Jasmine and Karma</li>
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

export default CASModal;
