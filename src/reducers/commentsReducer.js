import { ADD_COMMENTS_TO_STORE } from '../actions/comments';

export function comments (state = {}, action) {
  switch (action.type) {
    case ADD_COMMENTS_TO_STORE:
      const comments = action.comments.reduce((accumulator, value) => {
        accumulator[value.id] = value;
        return accumulator
      }, {});
      return Object.assign({}, state, comments);
    default:
      return state;
  }
}
