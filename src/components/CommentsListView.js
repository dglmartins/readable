import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentBodyRow from './CommentBodyRow';
import CommentFooterRow from './CommentFooterRow';
import SortSelect from './SortSelect';
import { sortByCurried } from '../utils/helpers';


const CommentsListView = (props) => (
  <div>
    <h3>{props.comments.length} comments</h3>
    {props.comments.length > 0 && (
      <SortSelect sortOptions="sortOptionsComments"/>
    )}
    <div className="comments-list">
      {sortByCurried(props.sortBy)(props.comments).map((comment) => (
        <section key={comment.id} className="comment-view-table-container">
          <table className="data-view-table">
            <tbody>
              <CommentBodyRow comment={comment}/>
              <CommentFooterRow comment={comment}/>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  </div>
);

function mapStateToProps ({ sortBy }) {
  return {
    sortBy
  };
}


export default withRouter(connect(mapStateToProps)(CommentsListView));
