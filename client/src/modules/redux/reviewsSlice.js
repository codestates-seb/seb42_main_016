import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REVIEW_ENDPOINT } from '../endpoints';
import API from '../API';

const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');
const config = {
  headers: {
    Authorization: token,
    refresh: refresh,
  },
};
export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (page) => {
  const response = await API.get(`${REVIEW_ENDPOINT}/member?page=${page}&size=${5}`, config);
  return response.data;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (reviewId) => {
  await API.delete(`${REVIEW_ENDPOINT}/${reviewId}`, config);
  return reviewId;
});

const initialState = {
  reviews: [],
  pageInfo: { totalElements: null },
  status: 'idle',
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload.data;
        state.pageInfo.totalElements = action.payload.pageInfo.totalElements;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = state.reviews.filter((review) => review.reviewId !== action.payload);
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectReviews = (state) => state.reviews.reviews;
export const selectPageInfo = (state) => state.reviews.pageInfo;
export default reviewsSlice.reducer;
