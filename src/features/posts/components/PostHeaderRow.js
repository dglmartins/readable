import React from 'react';
import { Link } from 'react-router-dom';

/**
* @description PostHeaderRow component. PostHeaderRow gets called by PostListView and PostView components.
* @returns a <tr> with the vote count and the title of a post.
* @param {object} props - One prop passed from parent: {object} props.post
*/
const PostHeaderRow = (props) => (
  <tr className="data-row">
    <td className="vote-count">Votes: <span>{props.post.voteScore}</span></td>
    <td className="post-title">Title:

      {/* link to Route that renders PostView component  */}
      <Link className="router-post-link" to={`/${props.post.category}/${props.post.id}`}>
        {props.post.title}
      </Link>
    </td>
  </tr>
);

export default PostHeaderRow;
