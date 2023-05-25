import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from './users/tweetSlice';

const store = configureStore({
  reducer: {
    tweet: tweetReducer,
  },
});

export default store;
