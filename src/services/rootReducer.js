import  { combineReducers } from 'redux';
import { categories } from '../features/categories/services/reducer';
import { comments } from '../features/posts/comments/services/reducer';
import { posts } from '../features/posts/services/reducer';
import { sortBy } from '../features/posts/sortBy/services/reducer';
import { spinner } from '../features/spinner/services/reducer';

export default combineReducers({
  categories,
  comments,
  posts,
  sortBy,
  spinner,
});
