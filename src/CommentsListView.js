import React from 'react';
import CommentBodyRow from './CommentBodyRow';
import CommentFooterRow from './CommentFooterRow';

const CommentsListView = (props) => (
  <div>
    <h3>{props.comments.length} comments</h3>
      {props.comments.map((comment) => (
        <section key={comment.id} className="data-view-table-container">
          <table className="data-view-table">
            <tbody>
              <CommentBodyRow comment={comment}/>
              <CommentFooterRow comment={comment}/>
            </tbody>
          </table>
        </section>
      ))}

  </div>
);

export default CommentsListView;
