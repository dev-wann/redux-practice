import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slicers/index';

// middleware
const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
