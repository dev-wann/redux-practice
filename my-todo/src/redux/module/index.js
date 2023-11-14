import { combineReducers } from 'redux';
import user from './user';
import todoList from './todoList';

const rootReducer = combineReducers({ user, todoList });

export default rootReducer;
