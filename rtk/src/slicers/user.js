import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../actions/user';

const initialState = { data: null, isLoggingIn: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // sync
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    // async
    [logIn.pending](state, action) {
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      state.isLoggingIn = false;
    },
  },
});

export { userSlice };
