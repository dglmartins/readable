export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_COMMENT_COUNT_TO_POST = 'ADD_COMMENT_COUNT_TO_POSTS';
export const VOTE_POST_UP = 'VOTE_POST_UP';
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN';

export function getPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
};

export function addCommentCountToPost ({postId, commentCount}) {
  return {
    type: ADD_COMMENT_COUNT_TO_POST,
    postId,
    commentCount
  }
};

export function votePostUp (postId) {
  return {
    type: VOTE_POST_UP,
    postId
  }
}

export function votePostDown (postId) {
  return {
    type: VOTE_POST_DOWN,
    postId
  }
}
