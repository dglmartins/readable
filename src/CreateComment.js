import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCommentThunk } from './actions/thunkActions';

import uuidv4 from  'uuid/v4';

class CreateComment extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = new Date().getTime();
    const id = uuidv4();
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    const parentId = this.props.postId
    this.props.createCommentThunk({id, timestamp, body, author, parentId});
    event.target.elements.author.value = '';
    event.target.elements.body.value = ''
  };

  render () {
    return (
      <div className="new-comment-container">
        <h3>Add a comment</h3>
        <form name="newCommentForm" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Type your comment here"  required/>
            <input name="author" className="login-input" type="text" placeholder="Author" required/>
            <button>Add Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createCommentThunk: (data) => dispatch(createCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CreateComment));
