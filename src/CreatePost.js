import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPostThunk } from './actions/thunkActions';

import uuidv4 from  'uuid/v4';

class CreatePost extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.elements.category.value) {
      alert("Please select a category");
      return;
    }
    const timestamp = new Date().getTime();
    const id = uuidv4();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    const category = event.target.elements.category.value;
    this.props.createPostThunk({id, timestamp, title, body, author, category});
    event.target.elements.author.value = '';
    event.target.elements.title.value = '';
    event.target.elements.body.value = ''
    this.props.history.push('/');
  };
  render () {
    console.log(this.props)

    return (
      <div className="new-comment-container">
        <h3>Add a post</h3>
        <form name="newCommentForm" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <select name="category" className="select-dropdown-input">
              <option value=''>Please select category</option>
              {this.props.categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
            <input name="title" type="text" placeholder="Post title" className="create-post-title" required/>
            <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Post body"  required/>
            <input name="author" className="login-input" type="text" placeholder="Author" required/>
            <button>Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

function mapDispatchToProps (dispatch) {
  return {
    createPostThunk: (data) => dispatch(createPostThunk(data))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));
