export const GET_ALL_POSTS = 'GET_ALL_POSTS';

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
