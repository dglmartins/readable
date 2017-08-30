export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST_UP = 'VOTE_POST_UP';
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const GET_COMMENT_COUNT = 'GET_COMMENT_COUNT';
export const INCREMENT_COMMENT_COUNT = 'INCREMENT_COMMENT_COUNT';
export const DECREMENT_COMMENT_COUNT = 'DECREMENT_COMMENT_COUNT';
export const INITALIZE_COMMENT_COUNT = 'INITALIZE_COMMENT_COUNT';

export function getPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
};

export function getCommentCount ({postId, initialCommentCount}) {
  return {
    type: GET_COMMENT_COUNT,
    postId,
    initialCommentCount
  };
}

export function incrementCommentCount (postId) {
  return {
    type: INCREMENT_COMMENT_COUNT,
    postId,
  };
}

export function initializeCommentCount (postId) {
  return {
    type: INITALIZE_COMMENT_COUNT,
    postId
  };
}

export function decrementCommentCount (postId) {
  return {
    type: DECREMENT_COMMENT_COUNT,
    postId,
  };
}

export function votePostUp (postId) {
  return {
    type: VOTE_POST_UP,
    postId
  };
}

export function votePostDown (postId) {
  return {
    type: VOTE_POST_DOWN,
    postId
  };
}

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export function createPost (post) {
  return {
    type: CREATE_POST,
    post
  }
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  };
}
