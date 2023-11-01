import { combineReducers } from 'redux';
import { userReducer } from './user.js';
import { postReducer } from './post.js';

export const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});
