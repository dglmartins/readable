import React from 'react';

/**
* @description PostBodyRow component. PostBodyRow gets called PostView component.
* @returns a <tr> with the body a post.
* @param {object} props - One prop passed from parent: {object} props.post
*/
const PostBodyRow = (props) => (
  <tr className="data-row">
    <td colSpan="2" className="post-body">
      {props.post.body}
    </td>
  </tr>
);

export default PostBodyRow;
