import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { votePostUpThunk, votePostDownThunk, deletePostThunk } from '../actions/thunkActions';
import { deleteParentInComment } from '../actions/comments';
import { toDate } from '../utils/helpers';

class PostFooterRow extends Component {
  onPostDelete = () => {
    //asynchronous
    this.props.deletePostThunk(this.props.post.id).then((deletedPostId) => {
        // synchronous - locally redux only
      for (const comment of this.props.comments.filter((comment) => comment.parentId === deletedPostId)) {
        this.props.deleteParentInComment(comment.id)
      }
    }).catch(() => {
      this.props.history.push('/ServerError');
    });
  }

  render () {
    return (
      <tr className="data-row">
        <td colSpan="2">
          <span className="author">by: {this.props.post.author}</span>
          <span className="time-stamp">{toDate(this.props.post.timestamp)} in<Link to={`/${this.props.post.category}`} className="category-in-post">{this.props.post.category}</Link></span>
          <Link to={`/${this.props.post.category}/${this.props.post.id}`} className="comments">{this.props.post.commentCount} comments</Link>
          <span className="action"><Link className="edit-link" to={`/updatePost/${this.props.post.id}`}>edit</Link></span>
          <span className="action" onClick={() => this.onPostDelete()}>delete</span>
          <span className="action" onClick={() => this.props.votePostUpThunk(this.props.post.id)}>vote up</span>
          <span className="action" onClick={() => this.props.votePostDownThunk(this.props.post.id)}>vote down</span>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePostUpThunk: (data) => dispatch(votePostUpThunk(data)),
    votePostDownThunk: (data) => dispatch(votePostDownThunk(data)),
    deletePostThunk: (data) => dispatch(deletePostThunk(data)),
    deleteParentInComment: (data) => dispatch(deleteParentInComment(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(PostFooterRow));
