import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API';
import { RESERVATION_ENDPOINT } from '../endpoints';

const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');
const config = {
  headers: {
    Authorization: token,
    refresh: refresh,
  },
};

export const fetchNonReview = createAsyncThunk('nonreview/fetchNonReview', async (page) => {
  const response = await API.get(
    `${RESERVATION_ENDPOINT}/non-review?page=${page}&size=${5}`,
    config,
  );
  return response.data;
});

const nonreviewSlice = createSlice({
  name: 'nonreview',
  initialState: {
    reservation: [],
    pageInfo: { totalElements: null },
    status: 'idle',
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNonReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNonReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservation = action.payload.data;
        state.pageInfo.totalElements = action.payload.pageInfo.totalElements;
      })
      .addCase(fetchNonReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectNonReview = (state) => state.nonreview.reservation;
export const selectPageInfo = (state) => state.nonreview.pageInfo;
export default nonreviewSlice.reducer;
