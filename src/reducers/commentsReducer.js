import {
  GET_COMMENTS_OF_POST,
  VOTE_COMMENT_UP,
  VOTE_COMMENT_DOWN,
  DELETE_COMMENT,
  DELETE_PARENT_IN_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments';

export function comments (state = {}, action) {
  const { comment, commentId } = action;
  switch (action.type) {
    case GET_COMMENTS_OF_POST:
      const comments = action.comments.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, comments);

    case VOTE_COMMENT_UP:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: state[commentId]["voteScore"] + 1
        }
      };

    case VOTE_COMMENT_DOWN:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: state[commentId]["voteScore"] - 1
        }
      };

    case DELETE_COMMENT:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          deleted: true
        }
      };

    case DELETE_PARENT_IN_COMMENT:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          parentDeleted: true
        }
      };

    case CREATE_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };

    default:
      return state;
  }
}
