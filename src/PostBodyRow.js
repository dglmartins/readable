import React from 'react';

const PostBodyRow = (props) => (
  <tr className="data-row">
    <td colSpan="2" className="post-body">
      {props.post.body}
    </td>
  </tr>
);

export default PostBodyRow;
