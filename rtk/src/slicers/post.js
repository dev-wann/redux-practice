import { createSlice } from '@reduxjs/toolkit';
import { addPost } from '../actions/post';

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // sync
  },
  extraReducers: {
    // async
    [addPost.fulfilled](state, action) {},
    [addPost.fulfilled](state, action) {},
    [addPost.fulfilled](state, action) {},
  },
});

export { postSlice };
