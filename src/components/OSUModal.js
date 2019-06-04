import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <p>During my time at OSU, I always enjoyed any courses that involved web development, and appreciated the freedom we had in selecting the tech stack we were going to use. I loved learning the many Javascript frameworks, and various back-end options. At OSU, I was able to build apps using Ruby on Rails, Spring, NodeJS, AngularJS, and vanilla Javascript.</p>
          <p>I also understood the importance of the software development lifecyle early, and took as many classes as I could in that area. A project that maximizes the use of the software development lifecycle will always lead to better results. I learned how to build test cases (normal, border, error, and special), use cases, user schemas, user stories, data flow diagrams, sequence diagrams, and functional objectives. Towards the end of my time at O
              SU, one of my classes utilized each of the previously mentioned skills and had us put together a Software Requirements and Specifications report for a project Nationwide was about to undertake.</p>
          <p>Coursework:</p>
          <ul>
              <li>Computer Science: Software I and II, Fundamentals of Engineering I and II, Systems I and II, Foundations I and II, Database Systems, Website Development Project Course, Computer Architecture, Information Security, Principles of Programming Languages, Capstone: Software Applications, Intro to Artificial Intelligence, Software Requirement Analysis, and Software Engineering</li>
              <li>Mathemetics:  Calculus I, Engineering Mathematics/Calculus II, Linear Algebra, Differential Equations, and Foundations of Higher Mathematics</li>
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

export default OSUModal;
