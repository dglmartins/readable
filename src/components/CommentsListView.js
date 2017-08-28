import React from 'react';
import CommentBodyRow from './CommentBodyRow';
import CommentFooterRow from './CommentFooterRow';

const CommentsListView = (props) => (
  <div>
    <h3>{props.comments.length} comments</h3>
    <div className="comments-list">
      {props.comments.map((comment) => (
        <section key={comment.id} className="comment-view-table-container">
          <table className="data-view-table">
            <tbody>
              <CommentBodyRow comment={comment}/>
              <CommentFooterRow comment={comment}/>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  </div>
);

export default CommentsListView;
