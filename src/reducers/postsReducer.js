import { GET_ALL_POSTS } from '../actions/posts';

export function posts (state = {}, action) {

  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, posts);
    default:
      return state;
  }
}
