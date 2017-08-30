import {
  GET_ALL_POSTS,
  GET_COMMENT_COUNT,
  VOTE_POST_UP,
  VOTE_POST_DOWN,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  INCREMENT_COMMENT_COUNT,
  DECREMENT_COMMENT_COUNT,
  INITALIZE_COMMENT_COUNT
} from './postsActions';

export function posts (state = {}, action) {
  const { post, postId, initialCommentCount } = action;
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, posts);

    case GET_COMMENT_COUNT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: initialCommentCount
        }
      };

    case INCREMENT_COMMENT_COUNT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: state[postId]["commentCount"] + 1
        }
      };

    case DECREMENT_COMMENT_COUNT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: state[postId]["commentCount"] - 1
        }
      };

    case INITALIZE_COMMENT_COUNT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: 0
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

    case UPDATE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          title: post.title,
          body: post.body
        }
      };

    default:
      return state;
  }
}
