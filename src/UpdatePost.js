import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePostThunk } from './actions/thunkActions';

class UpdatePost extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const id = this.props.post.id
    const update = { body: {title, body}, id };
    if (title === this.props.post.title && body === this.props.post.body) {
      alert("Please change something!");
      return;
    } else {
      this.props.updatePostThunk(update);
      this.props.history.push(`/${this.props.post.category}/${id}`);
    }
  };

  render () {
    return (
      <div className="new-comment-container">
        <h3>Edit post</h3>
        <form name="editPostForm" onSubmit={this.handleSubmit}>
          {this.props.post && (
            <div className="input-container">
              <input name="title" type="text" placeholder="Post title" className="create-post-title" defaultValue={this.props.post.title} required/>
              <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Post body"  defaultValue={this.props.post.body}  required/>
              <button>Edit Post</button>
            </div>
          )}
        </form>
        <div>
            <Link className="back-arrow"
              to="/">
            </Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updatePostThunk: (data) => dispatch(updatePostThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(UpdatePost));
