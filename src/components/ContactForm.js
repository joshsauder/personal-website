import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import $ from 'jquery';

/*
Conditional Rendering needed when a form is submitted to show an alert and hide the input fields
*/
function ToggleFormAndAlert(props) {
  if(props.success === true){
    return (
      <Alert variant="success">
        <Alert.Heading>Your Email Successfully Sent!</Alert.Heading>
          <p>
            Thank you for your interest! You should recieve an email from me reguarding your request within the next 48 hours. 
         </p>        
      </Alert>
    );
  } else if (props.fail === true){
    return (
      <Alert variant="danger">
        <Alert.Heading>Uhh Oh! Looks like there was an issue sending your email.</Alert.Heading>
        <p>
          Sorry for the inconvience. You can email me directly at joshsauder@gmail.com reguarding your request.
        </p>
      </Alert>
    )
  } else {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="name" className="col-form-label">Name</label>
            <input type="text" className="form-control" id="name" maxLength="70"/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input type="text" className="form-control" id="email" maxLength="254"/>
          </div>
          {props.title === "In The Clear Source Code Request" &&
            <div className="form-group">
              <label htmlFor="github" className="col-form-label">Github Username</label>
              <input type="text" className="form-control" id="github" maxLength="100"/>
            </div>
          }
          <div className="form-group">
            <label htmlFor="organization" className="col-form-label">Organization (optional)</label>
            <input type="text" className="form-control" id="organization" maxLength="100"/>
          </div>
          <div className="form-group">
            <label htmlFor="comments" className="col-form-label">Comments (optional)</label>
            <textarea className="form-control" name="comments" id="comments" maxLength="400" placeholder="Maximun Length: 400 Characters"></textarea>
          </div>
        </form> 
      )
  }
}


class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      show: props.modal,
      successAlert: props.alert,
      failAlert: props.alert,
      sentMail: false
    };

  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.modal !== prevState.show){
        return {
            show: nextProps.modal,
            successAlert: nextProps.alert,
            failAlert: nextProps.alert,
            sentMail: false
        }
    }else {
        return null;
    }
}

/*
When the submit button is clicked, call the sendMail backend function and depending on the response code, set the applicable alert state to true
*/
  handleClick(props) {
    this.setState({ sentMail: true })
    var name = $('#name').val();
    var email = $('#email').val();
    var org = $('#organization').val();
    var comments = $("textarea[name='comments']").val();
    var github = $('#github').val();

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
        type: props.title,
        github: github
      })
    })
    .then((response)=> {
      if (response.status === 200){
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

  shouldDisplayAlert() {
    return( 
      this.state.successAlert || this.state.failAlert
    )
  }; 

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.onHide} onClose={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ToggleFormAndAlert success={this.state.successAlert} fail={this.state.failAlert} title={this.props.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => { this.handleClick(this.props) }} disabled={this.state.sentMail} title="Submit Form">
              Submit
           </Button>
          <Button variant="outline-secondary" onClick={this.props.onHide} title="Close pop-up window">
              Close
          </Button>
        </Modal.Footer>        
      </Modal>
    );
  }
}

export default ContactForm;
