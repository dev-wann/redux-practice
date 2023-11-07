import { createAsyncThunk } from '@reduxjs/toolkit';
import { delay } from './util';

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  const result = await delay(500, {
    id: data.id,
  });
  return result;
});

export { logIn };
