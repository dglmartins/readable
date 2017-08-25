import { GET_COMMENTS_OF_POST, VOTE_COMMENT_UP, VOTE_COMMENT_DOWN } from '../actions/comments';

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
    default:
      return state;
  }
}
