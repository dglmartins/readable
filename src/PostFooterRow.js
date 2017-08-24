import React from 'react';
import { Link } from 'react-router-dom';
import { toDate } from './utils/helpers';

const PostFooterRow = (props) => (
  <tr className="data-row">
    <td colSpan="2">
      <span className="author">by: {props.post.author}</span>
      <span className="time-stamp">{toDate(props.post.timestamp)} in<Link to={`/${props.post.category}`} className="category-in-post">{props.post.category}</Link></span>
      <Link to={`/${props.post.category}/${props.post.id}`} className="comments">{props.post.commentCount} comments</Link>
      <span className="action">edit</span>
      <span className="action">delete</span>
      <span className="action">vote up</span>
      <span className="action">vote down</span>
    </td>
  </tr>
);

export default PostFooterRow;
