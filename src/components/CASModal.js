import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <p>During this Co-Op, I worked primary on an in-house web app. I worked with 5 other developers and a scrum master on this app in an Agile environment. Each week, we'd have a weekly sprint meeting to determine what was completed, and what items from the product backlog were to be completed during the next sprint.</p>
          <p>I was also given the opportunity to work on my own project to showcase what I learned throughout my Co-Op. I worked with an employee who had to manually call numerous web-services just to obtain a single ID. I ended up building a web app that allowed him to do all this just by putting in a single ID and would return a list of ID's that he may need. He also requested that I give him the option to output an Excel spreadsheet of any associated ID's and other applicable data. By the end of my Co-Op, it was made known to me that numerous other employees had found out about this tool, and had determined that it also made their job much easier.</p>
          <p>Technologies used:</p>
          <ul>
            <li>Front-End: AngularJS, Bootstrap, Gulp (Automated Development Workflow)</li>
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
