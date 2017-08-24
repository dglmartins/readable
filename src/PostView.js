import React from 'react';
import PostHeaderRow from './PostHeaderRow';
import PostBodyRow from './PostBodyRow';
import PostOrCommentFooterRow from './PostOrCommentFooterRow';

const PostView = (props) => (
  <div>
    {props.post && (
      <section className="data-view-table-container">
        <table className="data-view-table">
          <tbody>
            <PostHeaderRow post={props.post}/>
            <PostBodyRow post={props.post}/>
            <PostOrCommentFooterRow postOrComment={props.post}/>
          </tbody>
        </table>
      </section>
    )}
  </div>
);

export default PostView;
