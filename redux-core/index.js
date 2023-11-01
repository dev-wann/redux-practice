import { createStore } from 'redux';

function reducer(prevState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...prevState, user: action.data };
    case 'LOG_OUT':
      return { ...prevState, user: null };
    case 'ADD_POST': {
      return { ...prevState, posts: [...prevState.posts, action.data] };
    }
    default:
      return prevState;
  }
}

// store
const initialState = { user: null, posts: [] };
const store = createStore(reducer, initialState);

// action creator
const logIn = (data) => {
  return { type: 'LOG_IN', data };
};
const logOut = () => {
  return { type: 'LOG_OUT' };
};
const addPost = (data) => {
  return { type: 'ADD_POST', data };
};

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
