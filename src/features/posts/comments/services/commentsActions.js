export const GET_COMMENTS_OF_POST = 'GET_COMMENTS_OF_POST';
export const VOTE_COMMENT_UP = 'VOTE_COMMENT_UP';
export const VOTE_COMMENT_DOWN = 'VOTE_COMMENT_DOWN';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_PARENT_IN_COMMENT = 'DELETE_PARENT_IN_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function getCommentsOfPost(comments) {
  return {
    type: GET_COMMENTS_OF_POST,
    comments
  };
}

export function voteCommentUp (commentId) {
  return {
    type: VOTE_COMMENT_UP,
    commentId
  };
}

export function voteCommentDown (commentId) {
  return {
    type: VOTE_COMMENT_DOWN,
    commentId
  };
}

export function deleteComment (commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}

export function deleteParentInComment (commentId) {
  return {
    type: DELETE_PARENT_IN_COMMENT,
    commentId
  };
}

export function createComment (comment) {
  return {
    type: CREATE_COMMENT,
    comment
  };
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}
