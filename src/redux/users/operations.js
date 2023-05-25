import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchFollowers = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/users?page=${page}&limit=3`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addFollowers = createAsyncThunk(
  'tasks/addTask',
  async (users, thunkAPI) => {
    try {
      const response = await axios.post('/users', { users });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
