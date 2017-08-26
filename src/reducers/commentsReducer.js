import { GET_COMMENTS_OF_POST, VOTE_COMMENT_UP, VOTE_COMMENT_DOWN, DELETE_COMMENT } from '../actions/comments';
import R from 'ramda';

export function comments (state = {}, action) {
  const { commentId } = action;
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
    //R.dissoc(prop, object) is Ramda function returns a new Object that contains the old object without the passed prop.
      return R.dissoc(commentId, state);

    default:
      return state;
  }
}
