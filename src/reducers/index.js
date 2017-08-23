import  { combineReducers } from 'redux';
import { categories } from './categoriesReducer';
import { comments } from './commentsReducer';
import { posts } from './postsReducer';

export default combineReducers({
  categories,
  comments,
  posts
});
