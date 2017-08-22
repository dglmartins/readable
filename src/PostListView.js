import React from 'react';

const PostListView = (props) => (
  <section className="data-view-table-container">
    <table className="data-view-table">
      <tbody>
        <tr className="data-row">
          <td className="vote-count">Votes: <span>{props.vote}</span></td>
          <td className="post-title">This is a post title</td>
        </tr>
        <tr className="data-row">
          <td colSpan="2">
            <span className="author">by me</span>
            <span className="time-stamp">Created on Saturday, May 1, 12:00pm</span>
            <span className="action">edit</span>
            <span className="action">delete</span>
            <span className="action">vote up</span>
            <span className="action">vote down</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default PostListView;
