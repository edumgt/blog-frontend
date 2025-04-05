import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { Post } from './types';
import { AxiosResponse } from 'axios';
import { handleAxiosError } from '../../handleAxiosError';

export const fetchPosts = createAsyncThunk<Post[], void>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios.get<Post[]>('/posts');
      return response.data;
    } catch (err) {
      const message = handleAxiosError(err);
      return rejectWithValue(message);
    }
  },
);
