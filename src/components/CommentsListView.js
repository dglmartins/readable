import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentBodyRow from './CommentBodyRow';
import CommentFooterRow from './CommentFooterRow';
import SortSelect from './SortSelect';
import { sortByCurried } from '../utils/helpers';

/**
* @description CommentsListView component. CommentsListView gets called by PostView Component.
* @returns a <div> the title of number of comments, a SortSelect component if there are more than one comments in the category, and the list of comments, sorted as per sortBy options stored in Redux state.
* @param {object} props - One props passed from parent: {object} props.comments. One property mapped by mapStateToProps {object} sortBy
*/
const CommentsListView = (props) => (
  <div>
    {/* title number of comments */}
    <h3>{props.comments.length} comments</h3>

    {/* shows sort select if more than one comment */}
    {props.comments.length > 1 && (
      <SortSelect sortOptions="sortOptionsComments" sortBy={props.sortBy}/>
    )}

    <div className="comments-list">

      {/* renders a list of comments sorted by the prop and order the user selects in SortSelect, then by newest. When the user changes the options in SortSelect, it will change sortyBy.prop and sortBy.order in the Redux store. sortByCurried is a curried function that first expects an object argument which contains the properties: prop and order. It then returns another function that expects an array to sort, finally returning the sorted array, first sorted by the property and order and then by descending timestamp, which we then map over. Please see utils/helpers/sortByCurried function built with Ramda.  */}
      {sortByCurried(props.sortBy)(props.comments).map((comment) => (
        <section key={comment.id} className="comment-view-table-container">
          <table className="data-view-table">
            <tbody>

              {/* for each comment in the list renders a CommentBodyRow component, passing the comment */}
              <CommentBodyRow comment={comment}/>

              {/* for each comment in the list renders a CommentFooterRow component, passing the comment */}
              <CommentFooterRow comment={comment}/>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  </div>
);

//maps sortyBy Redux state to props
function mapStateToProps ({ sortBy }) {
  return {
    sortBy
  };
}

export default withRouter(connect(mapStateToProps)(CommentsListView));
