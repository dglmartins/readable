import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { votePostUpThunk, votePostDownThunk, deletePostThunk } from '../services/postsThunkActions';
import { deleteParentInComment } from '../comments/services/commentsActions';
import { toDate } from '../services/helpers';

/**
* @description PostFooterRow component. PostFooterRow gets called by PostListView and PostView components.
* @returns a <tr> with the author, the date, a link to the category, the comment count, edit post, delete post, vote up the post and vote down the post.
* @param {object} props - Two props passed from parent: {object} props.post, and props.comments. Also receives functions that dispatch actions from mapDispatchToProps.
*/

class PostFooterRow extends Component {

  //handles delete click.
  onPostDelete = () => {
    //asynchronous - deletePostThunk calls the api, then dispatches the deletePost action to the reducer, then returns the deleted post id
    this.props.deletePostThunk(this.props.post.id).then((deletedPostId) => {

      // synchronous - locally redux only - markes parent as deleted for every comment that belongs to the deleted post.
      for (const comment of this.props.comments) {
        this.props.deleteParentInComment(comment.id)
      }

    // catches api error, redirects to NoMatch component if server is offline on delete for example.
    }).catch(() => {
      this.props.history.push('/ServerError');
    });
  }

  render () {
    return (
      <tr className="data-row">
        <td colSpan="2">

          {/*  author */}
          <span className="author">by: {this.props.post.author}</span>

          {/*  time - toDate helper converts milliseconds to date */}
          <span className="time-stamp">{toDate(this.props.post.timestamp)} in

            {/*  Link Route that renders PostListView component filtered by category */}
            <Link
              to={`/${this.props.post.category}`}
              className="category-in-post">{this.props.post.category}
            </Link>
          </span>

          {/*  number of commments, also a Link to Route that renders PostView component */}
          <Link
            to={`/${this.props.post.category}/${this.props.post.id}`}
            className="comments">
            {this.props.post.commentCount} comments
          </Link>

          {/*  Link to Route that renders UpdatePost component */}
          <span className="action">
            <Link className="edit-link"
              to={`/updatePost/${this.props.post.id}`}>
              edit
            </Link>
          </span>

          {/*  delete post calls onPostDelete handler which dispatches actions */}
          <span className="action" onClick={() => this.onPostDelete()}>delete</span>

          {/*  vote post up - dispatches votePostUpThunk action - which calls API then dispatches votePostUp action */}
          <span className="action" onClick={() => this.props.votePostUpThunk(this.props.post.id)}>vote up</span>

          {/*  vote post down - dispatches votePostDownThunk action - which calls API then dispatches votePostDown action */}
          <span className="action" onClick={() => this.props.votePostDownThunk(this.props.post.id)}>vote down</span>
        </td>
      </tr>
    );
  }
}

// maps dispatch of thunkActions to props as well as dispatch of deleteParentInComment action
function mapDispatchToProps (dispatch) {
  return {
    votePostUpThunk: (data) => dispatch(votePostUpThunk(data)),
    votePostDownThunk: (data) => dispatch(votePostDownThunk(data)),
    deletePostThunk: (data) => dispatch(deletePostThunk(data)),
    deleteParentInComment: (data) => dispatch(deleteParentInComment(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(PostFooterRow));
