import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slice/Posts';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
