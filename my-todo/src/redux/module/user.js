import { logInRequest } from '../../server';

// Actions
const LOG_IN_SUCCESS = 'my-todo/user/LOG_IN_SUCCESS';
const LOG_IN_FAILED = 'my-todo/user/LOG_IN_FAILED';
const LOG_OUT = 'my-todo/user/LOG_OUT';

// Reducer
const initialState = { data: null, isFailed: false };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      return { ...state, data: action.payload, isFailed: false };
    }
    case LOG_IN_FAILED: {
      return { ...state, isFailed: true };
    }
    case LOG_OUT: {
      return { ...state, data: null, isFailed: false };
    }
    default:
      return state;
  }
}

// Action Creators
export function logIn(id, password) {
  try {
    const response = logInRequest(id, password);
    return { type: LOG_IN_SUCCESS, payload: response };
  } catch {
    return { type: LOG_IN_FAILED };
  }
}

export function logOut() {
  return { type: LOG_OUT };
}
