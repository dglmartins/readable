import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { votePostUpThunk, votePostDownThunk, deletePostThunk } from './actions/thunkActions';
import { deleteParentInComment } from './actions/comments';
import { toDate } from './utils/helpers';

const onPostDelete = ({post, deletePostThunk, deleteParentInComment, comments}) => {
  //asynchronous
  deletePostThunk(post.id)
    .then((deletedPostId) => {
      // synchronous - locally redux only
      for (const comment of comments.filter((comment) => comment.parentId === deletedPostId)) {
        deleteParentInComment(comment.id)
      }
    });
}

const PostFooterRow = (props) => (
  <tr className="data-row">
    <td colSpan="2">
      <span className="author">by: {props.post.author}</span>
      <span className="time-stamp">{toDate(props.post.timestamp)} in<Link to={`/${props.post.category}`} className="category-in-post">{props.post.category}</Link></span>
      <Link to={`/${props.post.category}/${props.post.id}`} className="comments">{props.comments.filter((comment) =>
        (comment.parentId === props.post.id && comment.deleted === false)
      ).length} comments</Link>
      <span className="action"><Link className="edit-link" to={`/updatePost/${props.post.id}`}>edit</Link></span>
      <span className="action" onClick={() => onPostDelete(props)}>delete</span>
      <span className="action" onClick={() => props.votePostUpThunk(props.post.id)}>vote up</span>
      <span className="action" onClick={() => props.votePostDownThunk(props.post.id)}>vote down</span>
    </td>
  </tr>
);

function mapDispatchToProps (dispatch) {
  return {
    votePostUpThunk: (data) => dispatch(votePostUpThunk(data)),
    votePostDownThunk: (data) => dispatch(votePostDownThunk(data)),
    deletePostThunk: (data) => dispatch(deletePostThunk(data)),
    deleteParentInComment: (data) => dispatch(deleteParentInComment(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(PostFooterRow));
