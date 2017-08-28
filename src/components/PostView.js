import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PostHeaderRow from './PostHeaderRow';
import PostBodyRow from './PostBodyRow';
import PostFooterRow from './PostFooterRow';
import CommentsListView from './CommentsListView';
import CreateComment from './CreateComment';

const PostView = (props) => (
  <div>
    {props.post && (
      <div>
        <section className="data-view-table-container">
          <table className="data-view-table">
            <tbody>
              <PostHeaderRow post={props.post}/>
              <PostBodyRow post={props.post}/>
              <PostFooterRow
                post={props.post}
                comments={props.comments}
              />
            </tbody>
          </table>
          <CommentsListView comments={props.comments.filter((comment) => (comment.parentId === props.post.id && comment.deleted === false))}/>
        </section>
        <CreateComment postId={props.post.id}/>
      </div>
    )}
    {!props.post && (
      <Redirect to="/"/>
    )}
  </div>
);

function mapStateToProps ({ comments }) {
  return {
    comments: Object.keys(comments).map((comment) => comments[comment])
  };
}

export default withRouter(connect(mapStateToProps)(PostView));
