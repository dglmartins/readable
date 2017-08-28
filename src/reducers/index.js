import  { combineReducers } from 'redux';
import { categories } from './categoriesReducer';
import { comments } from './commentsReducer';
import { posts } from './postsReducer';
import { sortBy } from './sortByReducer';
import { spinner } from './spinnerReducer';

export default combineReducers({
  categories,
  comments,
  posts,
  sortBy,
  spinner
});
