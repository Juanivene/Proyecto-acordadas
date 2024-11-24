import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAgreementFn } from '../api/agreements';

export const fetchAgreement = createAsyncThunk(
  'getAgreementSelected/fetchAgreement',
  async (id, thunkAPI) => {
    try {
      const data = await getAgreementFn(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const miSlice = createSlice({
  name: 'getAgreementSelected',
  initialState: {
    agreementsFilters: '',
    dataNow: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgreement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAgreement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataNow = action.payload;
      })
      .addCase(fetchAgreement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default miSlice.reducer;
