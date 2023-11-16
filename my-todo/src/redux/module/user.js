import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logInRequest } from '../../server';
import { AsyncState } from '../AsyncState';

// Thunk
export const logIn = createAsyncThunk(
  'my-todo/user/logIn',
  async (data, thunkAPI) => {
    const response = await logInRequest(data.id, data.password);
    return response;
  }
);

// Slice
const initialState = { data: null, logInState: AsyncState.IDLE, error: '' };
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
      state.logInState = AsyncState.IDLE;
      state.error = '';
    },
  },
  extraReducers: {
    [logIn.pending](state, action) {
      state.logInState = AsyncState.PENDING;
      state.error = '';
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.logInState = AsyncState.IDLE;
      state.error = '';
    },
    [logIn.rejected](state, action) {
      state.logInState = AsyncState.REJECTED;
      state.error = String(action.payload);
    },
  },
});

export default userSlice;
