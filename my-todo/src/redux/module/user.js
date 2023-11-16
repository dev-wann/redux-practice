import { logInRequest } from '../../server';
import { AsyncState } from '../AsyncState';

// Actions
const LOG_IN_PENDING = 'my-todo/user/LOG_IN_PENDING';
const LOG_IN_SUCCESS = 'my-todo/user/LOG_IN_SUCCESS';
const LOG_IN_REJECTED = 'my-todo/user/LOG_IN_FAILED';
const LOG_OUT = 'my-todo/user/LOG_OUT';

// Reducer
const initialState = { data: null, logInState: AsyncState.IDLE, error: '' };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_PENDING: {
      return {
        ...state,
        logInState: AsyncState.PENDING,
        error: '',
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        logInState: AsyncState.IDLE,
        error: '',
      };
    }
    case LOG_IN_REJECTED: {
      return {
        ...state,
        logInState: AsyncState.REJECTED,
        error: action.payload,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        data: null,
        logInState: AsyncState.IDLE,
        error: '',
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function logIn(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: LOG_IN_PENDING });

    const response = logInRequest(id, password);
    response
      .then((res) => dispatch({ type: LOG_IN_SUCCESS, payload: res }))
      .catch((error) => dispatch({ type: LOG_IN_REJECTED, payload: error }));
  };
}

export function logOut() {
  return { type: LOG_OUT };
}
