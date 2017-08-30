import React from 'react';

/**
* @description CommentBodyRow  component. CommentBodyRow gets called by CommentsListView component.
* @returns a <tr> with the voteScore and body of a comment
* @param {object} props - One prop passed from parent: {object} props.comment.
*/
const CommentBodyRow = (props) => (
  <tr className="data-row">
    <td className="vote-count">Votes: <span>{props.comment.voteScore}</span></td>
    <td className="comment-body">
      {props.comment.body}
    </td>
  </tr>
);

export default CommentBodyRow;
