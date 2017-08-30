import { GET_ALL_CATEGORIES } from './actions';

export function categories (state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories.categories;
    default:
      return state;
  }
}
