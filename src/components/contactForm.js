import React, { Component } from 'react';
import '../App.css';

class ContactForm extends Component {
  displayName: "ContactFormModal",
  componentDidMount: function() {
    $(this.ref.modal.getDOMNode()).modal({
      backdrop: "static",
      show: false
    });
  },
  onSubmitClick: function() {
    var name = $('#name');
    var email = $('#email');
    var org = $('#organization');
    var comments = $('comments');

    fetch('localhost:4000/send', {
      method: 'Post',
      headers : {
        'Accept': 'application/json',
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
    return (
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Contact Form</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email" class="col-form-label">Email</label>
                <input type="text" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="organization" class="col-form-label">Organization (if applicable)</label>
                <input type="text" class="form-control" id="organization">
              </div>
              <div class="form-group">
                <label for="comments" class="col-form-label">Comments</label>
                <textarea class="form-control" id="comments"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">>Submit</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  show: function() {
    $(this.ref.modal.getDOMNode()).modal("show");
  },
  hide: function(){
    $(this.ref.modal.getDOMNode()).modal("hide");
  }
}

export default ContactForm;
