import { createStore } from 'redux';
import rootReducer from './module';

const store = createStore(rootReducer);

export default store;
