import { voteCommentUp, voteCommentDown, deleteComment, createComment, updateComment } from './commentsActions';

export function voteCommentUpThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.voteCommentUp(commentId)
      .then((comment) => {
        dispatch(voteCommentUp(comment.id));
    });
  };
};

export function voteCommentDownThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.voteCommentDown(commentId)
      .then((comment) => {
        dispatch(voteCommentDown(comment.id));
    });
  };
};

export function deleteCommentThunk (commentId) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.deleteComment(commentId)
      .then((comment) => {
        dispatch(deleteComment(comment.id))
    })
  };
};

export function createCommentThunk (comment) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.createComment(comment)
      .then((comment) => {
        dispatch(createComment(comment))
    });
  };
};

export function updateCommentThunk (update) {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.updateComment(update.body, update.id)
      .then((comment) => {
        dispatch(updateComment(comment))
    });
  };
};
