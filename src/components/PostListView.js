import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SortSelect from './SortSelect';
import PostHeaderRow from './PostHeaderRow';
import PostFooterRow from './PostFooterRow';
import { sortByCurried } from '../utils/helpers';

/**
* @description PostListView component. PostListView gets called by App Component.
* @returns a <div> the title of the category filter, a SortSelect component if there are posts in the category, and the list of posts, sorted as per sortBy options stored in Redux state.
* @param {object} props - Three props passed from parent: {object} props.category, props.posts, props.comments. One property mapped by mapStateToProps {object} sortBy
*/
const PostListView = (props) => (
  <div>

    {/*  category of the list */}
    <h2 className="page-title">{props.category} posts</h2>

    {/*  calls SortSelect component if there are at least two posts */}
    {props.posts.length > 1 && (
      // passes the string sortOptionsPosts to SortSelect so it will render the sort options for posts. This is all controlled by the Redux sortBy state.
      <SortSelect sortOptions="sortOptionsPosts" sortBy={props.sortBy}/>
    )}

    {/* renders a list of posts sorted by the prop and order the user selects in SortSelect, then by newest. When the user changes the options in SortSelect, it will change sortyBy.prop and sortBy.order in the Redux store. sortByCurried is a curried function that first expects an object argument which contains the properties: prop and order. It then returns another function that expects an array to sort, finally returning the sorted array, first sorted by the property and order and then by descending timestamp, which we then map over. Please see our utils/helpers/sortByCurried function built with Ramda.  */}
    {sortByCurried(props.sortBy)(props.posts).map((post) => (
      <section key={post.id} className="data-view-table-container">
        <table className="data-view-table">
          <tbody>

            {/* for each post in the list renders a PostHeaderRow component, passing the post */}
            <PostHeaderRow post={post}/>

            {/* for each post in the list renders a PostFooterRow component, passing the post and the comments of that post */}
            <PostFooterRow
              post={post}
              comments={props.comments.filter((comment) => comment.parentId === post.id)}
            />
          </tbody>
        </table>
      </section>
    ))}
  </div>
);

//maps sortBy Redux state to props
function mapStateToProps ({ sortBy }) {
  return {
    sortBy
  };
}

export default withRouter(connect(mapStateToProps)(PostListView));
