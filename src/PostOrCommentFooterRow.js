import React from 'react';
import { Link } from 'react-router-dom';

const toDate = (createdAtMilliseconds) => {
  const date = new Date(createdAtMilliseconds)
  return date.toDateString();
}

const PostOrCommentFooterRow = (props) => (
  <tr className="data-row">
    <td colSpan="2">
      <span className="author">by: {props.postOrComment.author}</span>
      <span className="time-stamp">{toDate(props.postOrComment.timestamp)} in<Link to={`/${props.postOrComment.category}`} className="category-in-post">{props.postOrComment.category}</Link></span>
      <Link to={`/${props.postOrComment.category}/${props.postOrComment.id}`} className="comments">{props.postOrComment.commentCount} comments</Link>
      <span className="action">edit</span>
      <span className="action">delete</span>
      <span className="action">vote up</span>
      <span className="action">vote down</span>
    </td>
  </tr>
);

export default PostOrCommentFooterRow;
