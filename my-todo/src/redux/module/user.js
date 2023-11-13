import { logInRequest, logOutRequest } from '../../server';

// Actions
const LOG_IN_PENDING = 'my-todo/user/LOG_IN_PENDING';
const LOG_IN_SUCCESS = 'my-todo/user/LOG_IN_SUCCESS';
const LOG_IN_REJECTED = 'my-todo/user/LOG_IN_FAILED';
const LOG_OUT_PENDING = 'my-todo/user/LOG_OUT_PENDING';
const LOG_OUT_SUCCESS = 'my-todo/user/LOG_OUT_SUCCESS';
const LOG_OUT_REJECTED = 'my-todo/user/LOG_OUT_FAILED';

export const LogInState = { IDLE: 0, PENDING: 1, REJECTED: 2 };

// Reducer
const initialState = { data: null, logInState: LogInState.IDLE, error: '' };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_PENDING: {
      return {
        ...state,
        logInState: LogInState.PENDING,
        error: '',
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        logInState: LogInState.IDLE,
        error: '',
      };
    }
    case LOG_IN_REJECTED: {
      return {
        ...state,
        logInState: LogInState.REJECTED,
        error: action.payload,
      };
    }
    case LOG_OUT_PENDING: {
      return {
        ...state,
        logInState: LogInState.PENDING,
        error: '',
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        data: null,
        logInState: LogInState.IDLE,
        error: '',
      };
    }
    case LOG_OUT_REJECTED: {
      return {
        ...state,
        logInState: LogInState.REJECTED,
        error: action.payload,
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
  return (dispatch, getState) => {
    dispatch({ type: LOG_OUT_PENDING });
    try {
      const response = logOutRequest();
      response.then(() => dispatch({ type: LOG_OUT_SUCCESS }));
    } catch (error) {
      dispatch({ type: LOG_OUT_REJECTED, payload: error });
    }
  };
}
