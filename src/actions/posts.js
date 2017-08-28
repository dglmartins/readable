export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST_UP = 'VOTE_POST_UP';
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function getPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
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

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId
  }
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
  }
}
