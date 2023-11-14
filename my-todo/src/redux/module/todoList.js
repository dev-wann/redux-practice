import { AsyncState } from '../AsyncState';
import {
  addTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
  getTodosRequest,
} from '../../server';

// Actions
const TODOS_PENDING = 'my-todo/todos/TODOS_PENDING';
const TODOS_SUCCESS = 'my-todo/todos/TODOS_SUCCESS';
const TODOS_REJECTED = 'my-todo/todos/TODOS_REJECCTED';

// Reducer
const initialState = { todos: {}, todosState: AsyncState.IDLE, error: '' };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TODOS_PENDING: {
      return {
        ...state,
        todosState: AsyncState.PENDING,
      };
    }
    case TODOS_SUCCESS: {
      return {
        ...state,
        todosState: AsyncState.IDLE,
        todos: action.payload,
      };
    }
    case TODOS_REJECTED: {
      return {
        ...state,
        todosState: AsyncState.REJECTED,
        error: String(action.payload),
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function addTodo(todo) {
  return (dispatch, getState) => {
    dispatch({ type: TODOS_PENDING });
    handleResponse(addTodoRequest(todo), dispatch);
  };
}

export function getTodos() {
  return (dispatch, getState) => {
    dispatch({ type: TODOS_PENDING });
    handleResponse(getTodosRequest(), dispatch);
  };
}

export function updateTodo(id, todo) {
  return (dispatch, getState) => {
    dispatch({ type: TODOS_PENDING });
    handleResponse(updateTodoRequest(id, todo), dispatch);
  };
}

export function deleteTodo(id) {
  return (dispatch, getState) => {
    dispatch({ type: TODOS_PENDING });
    handleResponse(deleteTodoRequest(id), dispatch);
  };
}

function handleResponse(response, dispatch) {
  response
    .then((res) => {
      dispatch({ type: TODOS_SUCCESS, payload: res });
    })
    .catch((error) => {
      dispatch({ type: TODOS_REJECTED, payload: error });
    });
}
