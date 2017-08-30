import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementCommentCount } from '../actions/posts';
import { createCommentThunk } from '../actions/thunkActions';
import uuidv4 from  'uuid/v4';

/**
* @description CreateComment component. CreateComment gets called by PostView Component.
* @returns a <div> with a form to add a comment, form state is not kept in any state, however, onSubmit, what is currently in the form gets used for creating comment.
* @param {object} props - One props passed from parent: {string} props.postId. Two functions that dispatch actions mapped by mapDispatchToProps
*/
class CreateComment extends Component {

  //handleSubmit takes the form submit event
  handleSubmit = (event) => {

    //prevents default and builds the object that will go in the api request body
    event.preventDefault();
    const timestamp = new Date().getTime();
    const id = uuidv4(); // this is a unique id from uuid package
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    const parentId = this.props.postId

    //calls createCommentThunk, which calls the API, then dispatches createComment action, then dispatches incrementCommentCount in the post reducer, and catches api error by rendering NoMatch component
    this.props.createCommentThunk({id, timestamp, body, author, parentId}).then(() => {
      this.props.incrementCommentCount(this.props.postId);
    }).catch(() => {
      this.props.history.push('/ServerError');
    });
  };

  render () {
    return (
      <div className="new-container">
        <h3>Add a comment</h3>
        <form name="newCommentForm" onSubmit={this.handleSubmit}>
          <div className="input-container">

            {/* body */}
            <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Type your comment here"  required/>

            {/* author */}
            <input name="author" type="text" placeholder="Author" required/>
            <button>Add Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

//maps dispatch of needed actions to props
function mapDispatchToProps (dispatch) {
  return {
    createCommentThunk: (data) => dispatch(createCommentThunk(data)),
    incrementCommentCount: (data) => dispatch(incrementCommentCount(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CreateComment));
