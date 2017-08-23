import { GET_COMMENTS_OF_POST } from '../actions/comments';

export function comments (state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS_OF_POST:
      const comments = action.comments.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, comments);
    default:
      return state;
  }
}
