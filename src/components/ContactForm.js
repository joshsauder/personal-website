import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import $ from 'jquery';

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      show: props.modal,
      successAlert: props.alert,
      failAlert: props.alert
    };

  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal != prevState.show){
        return {
            show: nextProps.modal,
            successAlert: nextProps.alert,
            failAlert: nextProps.alert
        }
    }else {
        return null;
    }
}

  handleClick(props) {
    var name = $('#name').val();
    var email = $('#email').val();
    var org = $('#organization').val();
    var comments = $("textarea[name='comments']").val();

    fetch('/.netlify/functions/sendMail', {
      method: 'Post',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        organization: org,
        content: comments,
        type: props.title
      })
    })
    .then((response)=> {
      console.log(response.status);
      if (response.status == 200){
        this.setState({
          successAlert: true
        })
      }
      else {
        this.setState({
          failAlert: true
        })
      }    
    },
    (error) => {
      this.setState({
        failAlert: true
      })
    }
    )
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.onHide} onClose={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title} Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant="success" show={this.state.successAlert}>
              <Alert.Heading>Your Email Successfully Sent!</Alert.Heading>
              <p>
                Thank you for your interest! You should recieve an email from me reguarding your request within the next 48 hours. 
              </p>
            </Alert>
            <Alert variant="danger" show={this.state.failAlert}>
              <Alert.Heading>Uhh Oh! Looks like there was an issue sending your email.</Alert.Heading>
              <p>
                Sorry for the inconvience. You can email me directly at joshsauder@gmail.com reguarding your request.
              </p>
            </Alert>
            <form>
            <div className="form-group">
              <label htmlFor="name" className="col-form-label">Name</label>
              <input type="text" className="form-control" id="name"/>
              <div className="invalid-feedback">
                Please provide a valid Name.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-form-label">Email</label>
              <input type="text" className="form-control" id="email"/>
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="organization" className="col-form-label">Organization (optional)</label>
              <input type="text" className="form-control" id="organization" />
            </div>
            <div className="form-group">
              <label htmlFor="comments" className="col-form-label">Comments (optional)</label>
              <textarea className="form-control" name="comments" id="comments"></textarea>
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => { this.handleClick(this.props) }} >
              Submit
            </Button>
            <Button variant="primary" onClick={this.props.onHide} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    );
  }
}

export default ContactForm;
