export const GET_COMMENTS_OF_POST = 'GET_COMMENTS_OF_POST';

function getComments(comments) {
  return {
    type: GET_COMMENTS_OF_POST,
    comments
  }
};

export function getCommentsOfPost (post) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getCommentsOfPost(post.id)
      .then((comments) => {
        dispatch(getComments(comments));
        return { post, comments };
      });
  }
}
