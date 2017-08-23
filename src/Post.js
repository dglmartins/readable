import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCommentsToStore } from './actions/comments';
import { getCommentsOfPost } from './ReadableApi';

class Post extends Component {

  componentWillMount() {
    getCommentsOfPost(this.props.post.id).then((results) => {
      this.props.addCommentsToStore(results);
    });
  }

  render() {
    return (
      <section className="data-view-table-container">
        <table className="data-view-table">
          <tbody>
            <tr className="data-row">
              <td className="vote-count">Votes: <span>{this.props.post.voteScore}</span></td>
              <td className="post-title">Title: <span>{this.props.post.title}</span></td>
            </tr>
            <tr className="data-row">
              <td colSpan="2">
                <span className="author">by: {this.props.post.author}</span>
                <span className="time-stamp">{this.props.post.timestamp} in<span className="category-in-post">{this.props.post.category}</span></span>
                <span className="comments">{this.props.comments.filter((comment) => (comment.parentId === this.props.post.id)).length} comments</span>
                <span className="action">edit</span>
                <span className="action">delete</span>
                <span className="action">vote up</span>
                <span className="action">vote down</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

function mapStateToProps ({ comments }) {
  return {
    comments: Object.keys(comments).map((comment) => comments[comment])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addCommentsToStore: (data) => dispatch(addCommentsToStore(data)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
