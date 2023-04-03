import { createSlice } from '@reduxjs/toolkit';
import ExistingPosts from '../../static/ExistingPosts.json';

let nextIdx = 6;

export const postSlice = createSlice({
  name: 'posts',
  initialState: ExistingPosts,
  reducers: {
    write: (state, action) => {
      const { title, strContent } = action.payload;
      if ((title, strContent)) {
        state = state.post.push({
          idx: nextIdx,
          title: title,
          content: strContent,
        });
        nextIdx += 1;
      }
    },
    modify: (state, action) => {
      const { idx, title, strContent } = action.payload;
      state = state.map((item) => {
        if (item.idx === idx) {
          return { idx, title, content: strContent };
        } else {
          return item;
        }
      });
    },
  },
});

export const { write, modify } = postSlice.actions;
export default postSlice.reducer;
