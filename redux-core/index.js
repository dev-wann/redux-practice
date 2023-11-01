import { createStore } from 'redux';
import { reducer } from './reducers/index.js';
import { logIn, logOut } from './actions/user.js';
import { addPost } from './actions/post.js';

// create store
const initialState = {
  user: { data: null, isLoggingIn: true },
  posts: [],
};
const store = createStore(reducer, initialState);

// dispatch
console.log('Initial State: ', store.getState());
store.dispatch(logIn({ id: 1, name: 'devdev', admin: true }));
console.log('Log In: ', store.getState());
store.dispatch(addPost({ userId: 1, id: 1, content: 'First Post' }));
console.log('Add Post 1: ', store.getState());
store.dispatch(addPost({ userId: 1, id: 2, content: 'Second Post' }));
console.log('Add Post 2: ', store.getState());
store.dispatch(logOut());
console.log('Log Out: ', store.getState());
