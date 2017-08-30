import  { combineReducers } from 'redux';
import { categories } from './categories/categoriesReducer';
import { comments } from '../features/posts/comments/services/commentsReducer';
import { posts } from '../features/posts/services/postsReducer';
import { sortBy } from '../features/posts/sortBy/services/sortByReducer';
import { spinner } from '../features/spinner/services/spinnerReducer';

export default combineReducers({
  categories,
  comments,
  posts,
  sortBy,
  spinner,
});
