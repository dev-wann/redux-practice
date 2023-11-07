import { combineReducers } from 'redux';
import { userSlice } from './user.js';
import { postSlice } from './post.js';

export const reducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});
