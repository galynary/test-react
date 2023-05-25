import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  followersCount: 100500,
  following: false,
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    follow: state => {
      state.following = true;
      state.followersCount += 1;
    },
    unfollow: state => {
      state.following = false;
      state.followersCount -= 1;
    },
  },
});

export const { follow, unfollow } = tweetSlice.actions;
export default tweetSlice.reducer;
