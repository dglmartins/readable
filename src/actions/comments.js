export const GET_COMMENTS_OF_POST = 'GET_COMMENTS_OF_POST';

export function getCommentsOfPost(comments) {
  return {
    type: GET_COMMENTS_OF_POST,
    comments
  }
};
