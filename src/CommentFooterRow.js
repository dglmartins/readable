import React from 'react';
import { toDate } from './utils/helpers';

const CommentFooterRow = (props) => (
  <tr className="data-row">
    <td colSpan="2">
      <span className="author">by: {props.comment.author}</span>
      <span className="time-stamp">{toDate(props.comment.timestamp)}</span>
      <span className="action">edit</span>
      <span className="action">delete</span>
      <span className="action">vote up</span>
      <span className="action">vote down</span>
    </td>
  </tr>
);

export default CommentFooterRow;
