import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { decrementCommentCount } from '../actions/posts';
import { voteCommentUpThunk, voteCommentDownThunk, deleteCommentThunk } from '../actions/thunkActions';
import { toDate } from '../utils/helpers';

class CommentFooterRow extends Component {

  handleCommentDelete = (comment) => {
    this.props.deleteCommentThunk(comment.id).then(() => {
      this.props.decrementCommentCount(comment.parentId);
    });
  }

  render () {
    return (
      <tr className="data-row">
        <td colSpan="2">
          <span className="author">by: {this.props.comment.author}</span>
          <span className="time-stamp">{toDate(this.props.comment.timestamp)}</span>
          <span className="action"><Link className="edit-link" to={`/updateComment/${this.props.comment.id}`}>edit</Link></span>
          <span className="action" onClick={() =>  this.handleCommentDelete(this.props.comment)}>delete</span>
          <span className="action" onClick={() => this.props.voteCommentUpThunk(this.props.comment.id)}>vote up</span>
          <span className="action" onClick={() => this.props.voteCommentDownThunk(this.props.comment.id)}>vote down</span>
        </td>
      </tr>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
    voteCommentUpThunk: (data) => dispatch(voteCommentUpThunk(data)),
    voteCommentDownThunk: (data) => dispatch(voteCommentDownThunk(data)),
    decrementCommentCount: (data) => dispatch(decrementCommentCount(data)),
    deleteCommentThunk: (data) => dispatch(deleteCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CommentFooterRow));
