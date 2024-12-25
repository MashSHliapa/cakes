import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCakes } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchCakes = createAsyncThunk('cakes/fetchPosts', async () => {
  return await requestCakes();
});

export const cakesSlice = createSlice({
  name: 'cakes',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCakes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCakes.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    }),
      builder.addCase(fetchCakes.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export { fetchCakes };
export const cakesReducer = cakesSlice.reducer;
