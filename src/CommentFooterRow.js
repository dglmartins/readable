import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { voteCommentUpThunk, voteCommentDownThunk, deleteCommentThunk } from './actions/thunkActions';
import { toDate } from './utils/helpers';

const CommentFooterRow = (props) => (
  <tr className="data-row">
    <td colSpan="2">
      <span className="author">by: {props.comment.author}</span>
      <span className="time-stamp">{toDate(props.comment.timestamp)}</span>
      <span className="action"><Link className="edit-link" to={`/updateComment/${props.comment.id}`}>edit</Link></span>
      <span className="action" onClick={() => props.deleteCommentThunk(props.comment.id)}>delete</span>
      <span className="action" onClick={() => props.voteCommentUpThunk(props.comment.id)}>vote up</span>
      <span className="action" onClick={() => props.voteCommentDownThunk(props.comment.id)}>vote down</span>
    </td>
  </tr>
);

function mapDispatchToProps (dispatch) {
  return {
    voteCommentUpThunk: (data) => dispatch(voteCommentUpThunk(data)),
    voteCommentDownThunk: (data) => dispatch(voteCommentDownThunk(data)),
    deleteCommentThunk: (data) => dispatch(deleteCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CommentFooterRow));
