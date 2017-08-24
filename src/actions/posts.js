export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_COMMENT_COUNT_TO_POST = 'ADD_COMMENT_COUNT_TO_POSTS';

function getPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
};

export function getAllPosts () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllPosts()
      .then((posts) => {
        dispatch(getPosts(posts));
        return posts;
      });
  }
}

export function addCommentCountToPost ({postId, commentCount}) {
  console.log(commentCount);
  return {
    type: ADD_COMMENT_COUNT_TO_POST,
    postId,
    commentCount
  }
};
