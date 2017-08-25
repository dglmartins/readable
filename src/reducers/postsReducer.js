import { GET_ALL_POSTS, ADD_COMMENT_COUNT_TO_POST, VOTE_POST_UP, VOTE_POST_DOWN } from '../actions/posts';

export function posts (state = {}, action) {
  const { postId, commentCount } = action;
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, posts);

    case ADD_COMMENT_COUNT_TO_POST:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: commentCount
        }
      };

    case VOTE_POST_UP:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId]["voteScore"] + 1
        }
      };

      case VOTE_POST_DOWN:
        return {
          ...state,
          [postId]: {
            ...state[postId],
            voteScore: state[postId]["voteScore"] - 1
          }
        };

    default:
      return state;
  }
}
