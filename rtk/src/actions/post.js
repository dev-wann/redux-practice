import { createAsyncThunk } from '@reduxjs/toolkit';
import { delay } from './util';

const addPost = createAsyncThunk('post/add', async (data, thunkAPI) => {
  const result = await delay(500, {
    title: data.title,
    content: data.content,
  });
  return result;
});

export { addPost };
