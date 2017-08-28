import {
  GET_ALL_POSTS,
  VOTE_POST_UP,
  VOTE_POST_DOWN,
  DELETE_POST,
  CREATE_POST
} from '../actions/posts';

export function posts (state = {}, action) {
  const { post, postId } = action;
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, posts);

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

    case DELETE_POST:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          deleted: true
        }
      };

    case CREATE_POST:
      return {
        ...state,
        [post.id]: post
      };

    default:
      return state;
  }
}
