import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAgreementsFn } from '../api/agreements';

export const fetchApi = createAsyncThunk(
  'getAgreementsFilters/fetchApi',
  async ({ filters, index }, thunkAPI) => {
    try {
      const data = await getAgreementsFn(filters, index);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const miSlice = createSlice({
  name: 'getAgreementsFilters',
  initialState: {
    agreementsFilters: '',
    dataNow: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataNow = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default miSlice.reducer;