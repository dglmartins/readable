import { GET_ALL_POSTS, ADD_COMMENT_COUNT_TO_POST } from '../actions/posts';

export function posts (state = {}, action) {
  switch (action.type) {

    case GET_ALL_POSTS:
      const posts = action.posts.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, posts);

    case ADD_COMMENT_COUNT_TO_POST:
      const { postId, commentCount } = action;
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: commentCount
        }
      };
      
    default:
      return state;
  }
}
