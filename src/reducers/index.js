import  { combineReducers } from 'redux';
import { categories } from './categoriesReducer';
import { comments } from './commentsReducer';
import { posts } from './postsReducer';
import { sortBy } from './sortByReducer';


export default combineReducers({
  categories,
  comments,
  posts,
  sortBy
});
