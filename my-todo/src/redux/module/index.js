import { combineReducers } from 'redux';
import userSlice from './user';
import todoListReducer from './todoList';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  todoList: todoListReducer,
});

export default rootReducer;
