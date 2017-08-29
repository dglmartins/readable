import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SortSelect from './SortSelect';
import PostHeaderRow from './PostHeaderRow';
import PostFooterRow from './PostFooterRow';
import { sortByCurried } from '../utils/helpers';

const PostListView = (props) => (
  <div>
    <h2 className="page-title">{props.category} posts</h2>
    {props.posts.length > 0 && (
      <SortSelect sortOptions="sortOptionsPosts"/>
    )}
    {sortByCurried(props.sortBy)(props.posts).map((post) => (
      <section key={post.id} className="data-view-table-container">
        <table className="data-view-table">
          <tbody>
            <PostHeaderRow post={post}/>
            <PostFooterRow
              post={post}
              comments={props.comments}
            />
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
