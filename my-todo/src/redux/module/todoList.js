import {
  createReducer,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from '@reduxjs/toolkit';
import { AsyncState } from '../AsyncState';
import {
  addTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
  getTodosRequest,
} from '../../server';

// Thunk
export const addTodo = createAsyncThunk('todoList/addTodo', (data, thunkAPI) =>
  addTodoRequest(data.todo)
);
export const getTodos = createAsyncThunk(
  'todoList/getTodos',
  (data, thunkAPI) => getTodosRequest()
);
export const updateTodo = createAsyncThunk(
  'todoList/updateTodo',
  (data, thunkAPI) => updateTodoRequest(data.id, data.todo)
);
export const deleteTodo = createAsyncThunk(
  'todoList/updateTodo',
  (data, thunkAPI) => deleteTodoRequest(data.id)
);

// Reducer
const initialState = { todos: {}, todosState: AsyncState.IDLE, error: '' };
const isTodoPending = isPending(addTodo, getTodos, updateTodo, deleteTodo);
const isTodoFulfilled = isFulfilled(addTodo, getTodos, updateTodo, deleteTodo);
const isTodoRejected = isRejected(addTodo, getTodos, updateTodo, deleteTodo);
const todoListReducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(isTodoPending, (state, action) => {
      state.todosState = AsyncState.PENDING;
      state.error = '';
    })
    .addMatcher(isTodoFulfilled, (state, action) => {
      state.todos = action.payload;
      state.todosState = AsyncState.IDLE;
    })
    .addMatcher(isTodoRejected, (state, action) => {
      state.todosState = AsyncState.REJECTED;
      state.error = String(action.payload);
    });
});

export default todoListReducer;
