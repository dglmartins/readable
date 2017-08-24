import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SortSelect from './SortSelect';
import R from 'ramda';

const sortByDescendCurried = ({prop, order}) => R.sort(R[order](R.prop(prop)));

const toDate = (createdAtMilliseconds) => {
  // const oneDayInMilliseconds = 24*60*60*1000;
  // const date = new Date();
  // return Math.round(10 * Math.abs((nowDate.getTime() - createdAtMilliseconds)/oneDayInMilliseconds)) / 10
  const date = new Date(createdAtMilliseconds)
  return date.toDateString();
}

const PostListView = (props) => (
  <div>
    <h2 className="page-title">{props.category} posts</h2>
    <SortSelect/>
    {sortByDescendCurried(props.sortBy)(props.posts).map((post) => (
      <section key={post.id} className="data-view-table-container">
        <table className="data-view-table">
          <tbody>
            <tr className="data-row">
              <td className="vote-count">Votes: <span>{post.voteScore}</span></td>
              <td className="post-title">Title: <span>{post.title}</span></td>
            </tr>
            <tr className="data-row">
              <td colSpan="2">
                <span className="author">by: {post.author}</span>
                <span className="time-stamp">{toDate(post.timestamp)} in<span className="category-in-post">{post.category}</span></span>
                <span className="comments">{props.comments.filter((comment) => (comment.parentId === post.id)).length} comments</span>
                <span className="action">edit</span>
                <span className="action">delete</span>
                <span className="action">vote up</span>
                <span className="action">vote down</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    ))}
  </div>
);

function mapStateToProps ({ comments, sortBy }) {
  return {
    comments: Object.keys(comments).map((comment) => comments[comment]),
    sortBy
  };
}

export default withRouter(connect(mapStateToProps)(PostListView));
