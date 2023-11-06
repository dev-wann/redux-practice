import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/index.js';

// create store
const initialState = {
  user: { data: null, isLoggingIn: false },
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

export { store };
