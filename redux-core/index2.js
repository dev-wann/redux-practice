import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/index.js';
import { logInAsync } from './actions/user.js';

// create store
const initialState = {
  user: { data: null, isLoggingIn: true },
  posts: [],
};
// middleware
const loggingMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const thunkMiddleware = (store) => (next) => (action) => {
  // async
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  // sync
  next(action);
};
const enhancer = applyMiddleware(loggingMiddleware, thunkMiddleware);
const store = createStore(reducer, initialState, enhancer);

// dispatch
store.dispatch(logInAsync({ id: 1, name: 'devdev', admin: true }));
// console.log('Initial State: ', store.getState());
// store.dispatch(logIn({ id: 1, name: 'devdev', admin: true }));
// console.log('Log In: ', store.getState());
// store.dispatch(addPost({ userId: 1, id: 1, content: 'First Post' }));
// console.log('Add Post 1: ', store.getState());
// store.dispatch(addPost({ userId: 1, id: 2, content: 'Second Post' }));
// console.log('Add Post 2: ', store.getState());
// store.dispatch(logOut());
// console.log('Log Out: ', store.getState());
