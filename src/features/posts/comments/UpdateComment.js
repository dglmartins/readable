import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCommentThunk } from './services/commentsThunkActions';

/**
* @description UpdateComment component. UpdateComment gets called by App Component when Route matches. Route matches when user clicks edit link on CommentFooterRow component.
* @returns a <div> with a form to edit a comment, form state is not kept in any state, however, onSubmit, what is currently in the form gets used for editing comment.
* @param {object} props - One props passed from parent: {object} props.comment. One function that dispatches an action mapped by mapDispatchToProps
*/
class UpdateComment extends Component {

  //handleSubmit takes the form submit event
  handleSubmit = (event) => {

    //prevents default and builds the object that will go in the api request body
    event.preventDefault();
    const body = event.target.elements.body.value;
    const timestamp = new Date().getTime();
    const id = this.props.comment.id;
    const update = { body: {timestamp, body}, id };

    //if no change alerts and returns (no need to call api with no change!)
    if (body === this.props.comment.body) {
      alert("Please change something!");
      return;

    //else call updateCommentThunk which calls api then dispatches updateComment action, then goes back to where the user was prior to the update and catches api error by redirecting to NoMatch component
    } else {
      this.props.updateCommentThunk(update).then(() => {
        this.props.history.goBack();
      }).catch(() => {
        this.props.history.push('/ServerError');
      });
    }
  };

  render () {
    return (
      <div className="new-container">
        <h3>Edit post</h3>
        <form name="editCommentForm" onSubmit={this.handleSubmit}>

          {/* only renders form if there is a comment to avoid error when user types in a route that matches */}
          {this.props.comment && (
            <div className="input-container">

              {/* body */}
              <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Comment body"  defaultValue={this.props.comment.body}  required/>
              <button>Edit Comment</button>
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

//maps updateCommentThunk dispatch to props.
function mapDispatchToProps (dispatch) {
  return {
    updateCommentThunk: (data) => dispatch(updateCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(UpdateComment));
