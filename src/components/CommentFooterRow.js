import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { decrementCommentCount } from '../actions/posts';
import { voteCommentUpThunk, voteCommentDownThunk, deleteCommentThunk } from '../actions/thunkActions';
import { toDate } from '../utils/helpers';

/**
* @description CommentFooterRow component. CommentFooterRow gets called by CommentsListView component.
* @returns a <tr> with the author, the date, edit comment, delete comment, vote up the comment and vote down the comment.
* @param {object} props - One prop passed from parent: {object} props.comment,  Also receives functions that dispatch actions from mapDispatchToProps.
*/
const CommentFooterRow = (props) => {
  // deconstructs props
  const { comment, deleteCommentThunk, decrementCommentCount, voteCommentUpThunk, voteCommentDownThunk, history } = props;

  return (
    <tr className="data-row">
      <td colSpan="2">

        {/*  author */}
        <span className="author">by: {comment.author}</span>

        {/*  time - toDate helper converts milliseconds to date */}
        <span className="time-stamp">{toDate(comment.timestamp)}</span>

        {/* edit - Links to Route that renders UpdateComment component */}
        <span className="action">
          <Link className="edit-link" to={`/updateComment/${comment.id}`}>
            edit
          </Link>
        </span>

        {/*  deleteCommentThunk calls api, then dispatches deleteComment action, then dispatches decrementCommentCount on post reducer, catches api error redirects to NoMatch component */}
        <span className="action" onClick={() => {
            deleteCommentThunk(comment.id).then(() => {
            decrementCommentCount(comment.parentId);
          }).catch(() => {
            history.push('/ServerError');
          });
        }}>
          delete
        </span>

        {/*  voteCommentUpThunk calls api, then dispatches voteCommentUp action */}
        <span className="action" onClick={() => voteCommentUpThunk(comment.id)}>vote up</span>

        {/*  voteCommentDownThunk calls api, then dispatches voteCommentDown action */}
        <span className="action" onClick={() => voteCommentDownThunk(comment.id)}>vote down</span>
      </td>
    </tr>
  );
};

//maps thunk actions and action to props
function mapDispatchToProps (dispatch) {
  return {
    voteCommentUpThunk: (data) => dispatch(voteCommentUpThunk(data)),
    voteCommentDownThunk: (data) => dispatch(voteCommentDownThunk(data)),
    decrementCommentCount: (data) => dispatch(decrementCommentCount(data)),
    deleteCommentThunk: (data) => dispatch(deleteCommentThunk(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CommentFooterRow));
