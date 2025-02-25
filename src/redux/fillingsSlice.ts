import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestFillings } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchFillings = createAsyncThunk('fillings/fetchFillings', async () => {
  return await requestFillings();
});

const fillingsSlice = createSlice({
  name: 'fillings',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFillings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFillings.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFillings.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchFillings };
export const fillingsReducer = fillingsSlice.reducer;
