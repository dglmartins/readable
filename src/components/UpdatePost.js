import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePostThunk } from '../actions/thunkActions';

/**
* @description UpdatePost component. UpdatePost gets called by App Component when Route matches. Route matches when user clicks edit link on PostFooterRow component.
* @returns a <div> with a form to edit a post, form state is not kept in any state, however, onSubmit, what is currently in the form gets used for editing comment.
* @param {object} props - One props passed from parent: {object} props.post. One function that dispatches an action mapped by mapDispatchToProps
*/
class UpdatePost extends Component {

  //handleSubmit takes the form submit event
  handleSubmit = (event) => {

    //prevents default and builds the object that will go in the api request body
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const id = this.props.post.id
    const update = { body: {title, body}, id };

    //if no change alerts and returns (no need to call api with no change!)
    if (title === this.props.post.title && body === this.props.post.body) {
      alert("Please change something!");
      return;

    //else call updatePostThunk which calls api then dispatches updatePost action, then redirects to PostView component. catches api error by redirecting to NoMatch component
    } else {
      this.props.updatePostThunk(update).then(() => {
        this.props.history.push(`/${this.props.post.category}/${id}`);
      }).catch(() => {
        this.props.history.push('/ServerError');
      });
    }
  };

  render () {
    return (
      <div className="new-container">
        <h3>Edit post</h3>
        <form name="editPostForm" onSubmit={this.handleSubmit}>

          {/* only renders form if there is a post to avoid error when user types in a route that matches */}
          {this.props.post && (
            <div className="input-container">

              {/* title */}
              <input name="title" type="text" placeholder="Post title" className="create-post-title" defaultValue={this.props.post.title} required/>

              {/* body */}
              <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Post body"  defaultValue={this.props.post.body}  required/>
              <button>Edit Post</button>
            </div>
          )}
        </form>
        <div>

          {/* control to cancel update and go back */}
          <span className="back-arrow" onClick={() => this.props.history.goBack()}>
          </span>
        </div>
      </div>
    );
  }
}

//maps dispatch of updatePostThunk to props.
function mapDispatchToProps (dispatch) {
  return {
    updatePostThunk: (data) => dispatch(updatePostThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(UpdatePost));
