import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCommentThunk } from '../actions/thunkActions';

class UpdateComment extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const body = event.target.elements.body.value;
    const timestamp = new Date().getTime();
    const id = this.props.comment.id;
    const update = { body: {timestamp, body}, id };
    if (body === this.props.comment.body) {
      alert("Please change something!");
      return;
    } else {
      this.props.updateCommentThunk(update).then(() => {
        this.props.history.goBack();
      }).catch(() => {
        this.props.history.push('/ServerError');
      });
    }
  };

  render () {
    console.log(this.props)
    return (
      <div className="new-comment-container">
        <h3>Edit post</h3>
        <form name="editCommentForm" onSubmit={this.handleSubmit}>
          {this.props.comment && (
            <div className="input-container">
              <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Comment body"  defaultValue={this.props.comment.body}  required/>
              <button>Edit Comment</button>
            </div>
          )}
        </form>
        <div>
          <span className="back-arrow" onClick={() => this.props.history.goBack()}>
          </span>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateCommentThunk: (data) => dispatch(updateCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(UpdateComment));
