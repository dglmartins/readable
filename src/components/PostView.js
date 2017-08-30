import React from 'react';
import { Redirect } from 'react-router-dom';
import PostHeaderRow from './PostHeaderRow';
import PostBodyRow from './PostBodyRow';
import PostFooterRow from './PostFooterRow';
import CommentsListView from './CommentsListView';
import CreateComment from './CreateComment';

/**
* @description PostView component. PostView gets called by App Component and shows a post's details.
* @returns a <div> that shows a post if the post exists (this catches errors if a user types in an address by hand that is seen as a category/post_id for a post that actually does not exist). Calls a PostHeaderRow, a PostBodyRow and a PostFooterRow, also calls a CommentsListView and a CreateComment components.
* @param {object} props - Two props passed from parent: {object} props.post the post, if any, that mathces the route post_id and props.comments, the comments (if any) of that post.
*/
const PostView = (props) => (
  <div>

    {/*  checks if post exists */}
    {props.post && (

      // if posts exists renders the post
      <div>
        <section className="data-view-table-container">
          <table className="data-view-table">
            <tbody>

              {/* calls PostHeaderRow passing the post */}
              <PostHeaderRow post={props.post}/>

              {/* calls PostBodyRow passing the post */}
              <PostBodyRow post={props.post}/>

              {/* calls PostFooterRow passing the post and the comments of that post (if any) */}
              <PostFooterRow
                post={props.post}
                comments={props.comments}
              />
            </tbody>
          </table>

          {/* calls CommentsListView comments, if any, filtered by not deleted */}
          <CommentsListView comments={props.comments.filter((comment) => (comment.deleted === false))}/>
        </section>

        {/* calls CreateComment in line, for adding new comments, passing the postId */}
        <CreateComment postId={props.post.id}/>
      </div>
    )}

    {/* If post does not exist, redirects to root */}
    {!props.post && (
      <Redirect to="/"/>
    )}
  </div>
);

export default PostView;
