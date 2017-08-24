import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SortSelect from './SortSelect';
import R from 'ramda';
import PostHeaderRow from './PostHeaderRow';
import PostOrCommentFooterRow from './PostOrCommentFooterRow';
import PostBodyRow from './PostBodyRow';

const sortByDescendCurried = ({prop, order}) => R.sort(R[order](R.prop(prop)));

const PostListView = (props) => (
  <div>
    <h2 className="page-title">{props.category} posts</h2>
    <SortSelect/>
    {sortByDescendCurried(props.sortBy)(props.posts).map((post) => (
      <section key={post.id} className="data-view-table-container">
        <table className="data-view-table">
          <tbody>
            <PostHeaderRow post={post}/>
            <PostOrCommentFooterRow postOrComment={post}/>
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
