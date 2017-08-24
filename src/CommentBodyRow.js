import React from 'react';

const CommentBodyRow = (props) => (
  <tr className="data-row">
    <td className="vote-count">Votes: <span>{props.comment.voteScore}</span></td>
    <td className="comment-body">
      {props.comment.body}
    </td>
  </tr>
);

export default CommentBodyRow;
