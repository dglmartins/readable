import React from 'react';
import { Link } from 'react-router-dom';

const PostHeaderRow = (props) => (
  <tr className="data-row">
    <td className="vote-count">Votes: <span>{props.post.voteScore}</span></td>
    <td className="post-title">Title: <Link className="router-post-link" to={`/${props.post.category}/${props.post.id}`}>{props.post.title}</Link></td>
  </tr>
);

export default PostHeaderRow;
