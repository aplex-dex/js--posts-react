import { combineReducers } from 'redux';

import posts from './posts/reducer';
import users from './users/reducer';
import comments from './comments/reducer';

export default combineReducers({
  posts,
  users,
  comments,
});
