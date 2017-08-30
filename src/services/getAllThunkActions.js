import { getPosts } from '../features/posts/services/actions';
import { getCommentsOfPost } from '../features/posts/comments/services/actions';
import { getCategories } from '../features/categories/services/actions';

//get all posts
function getPostsThunk () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllPosts()
      .then((posts) => {
        dispatch(getPosts(posts));
        return posts;
    })
  };
};

//get all categories
function getCategoriesThunk () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllCategories()
      .then((categories) => {
        dispatch(getCategories(categories));
        return categories;
    })
  };
};

//get comments of post
function getCommentsOfPostThunk (post) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getCommentsOfPost(post.id)
      .then((comments) => {
        dispatch(getCommentsOfPost(comments));
        return { postId: post.id, initialCommentCount: comments.length };
    });
  };
};

//get all with Promise.all => array with a postId and commentCount for each post
export function getPostsCategoriesAndCommentsThunk () {
  return function (dispatch) {
    return Promise.all([
      dispatch(getPostsThunk()),
      dispatch(getCategoriesThunk())
    ]).then(([postsArray, categoriesArray]) => (
      Promise.all(postsArray.map((post) => (
        dispatch(getCommentsOfPostThunk(post))
      ))).then(res => res)
    ))
      .catch((error) => (error))
  };
};
