import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = { show: props.modal };

    }
    componentWillReceiveProps(nextProps){
        if(this.state.show!==nextProps.modal){
        this.setState({show: nextProps.modal})
      }
  }

  onSubmitClick () {
    var name = $('#name').val();
    var email = $('#email').val();
    var org = $('#organization').val();
    var comments = $("textarea[name='comments']").val();
    console.log(comments);

    fetch('http://localhost:4000/email', {
      method: 'Post',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        organization: org,
        content: comments
      })
    })
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <Modal show={this.state.show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="name" className="col-form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-form-label">Email</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="organization" className="col-form-label">Organization (if applicable)</label>
              <input type="text" className="form-control" id="organization" />
            </div>
            <div className="form-group">
              <label htmlFor="comments" className="col-form-label">Comments</label>
              <textarea className="form-control" name="comments" id="comments"></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.onSubmitClick} >
              Submit
            </Button>
            <Button variant="primary" onClick={close} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    );
  }
}

export default ContactForm;
