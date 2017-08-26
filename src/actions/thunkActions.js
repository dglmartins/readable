import { getPosts, votePostUp, votePostDown } from './posts';
import { getCommentsOfPost, voteCommentUp, voteCommentDown, deleteComment } from './comments';
import { getCategories } from './categories';


function getPostsThunk () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllPosts()
      .then((posts) => {
        dispatch(getPosts(posts));
        return posts;
      });
  }
}

function getCategoriesThunk () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllCategories()
      .then((categories) => {
        dispatch(getCategories(categories));
        return categories;
      });
  }
}

function getCommentsOfPostThunk (post) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getCommentsOfPost(post.id)
      .then((comments) => {
        dispatch(getCommentsOfPost(comments));
        return { id: post.id, commentCount: comments.length };
      });
  }
}

export function getPostsCategoriesAndCommentsThunk () {
  return function (dispatch) {
    return Promise.all([
      dispatch(getPostsThunk()),
      dispatch(getCategoriesThunk())
    ]).then(([postsArray, categoriesArray]) => (
      Promise.all(postsArray.map((post) => (
        dispatch(getCommentsOfPostThunk(post))
      )))
    ));
  };
}

export function votePostUpThunk (postId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.votePostUp(postId)
      .then((post) => {
        dispatch(votePostUp(post.id));
      });
  }
}

export function votePostDownThunk (postId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.votePostDown(postId)
      .then((post) => {
        dispatch(votePostDown(post.id));
      });
  }
}

export function voteCommentUpThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.voteCommentUp(commentId)
      .then((comment) => {
        dispatch(voteCommentUp(comment.id));
      });
  }
}

export function voteCommentDownThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.voteCommentDown(commentId)
      .then((comment) => {
        dispatch(voteCommentDown(comment.id));
      });
  }
}

export function deleteCommentThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.deleteComment(commentId)
      .then((comment) => {
        dispatch(deleteComment(comment.id))
      })
  }
}
