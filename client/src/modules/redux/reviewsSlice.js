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
export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await API.get(`${REVIEW_ENDPOINT}/member?page=${1}&size=${10}`, config);
  return response.data.data;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (reviewId) => {
  await API.delete(`${REVIEW_ENDPOINT}/${reviewId}`, config);
  return reviewId;
});

const initialState = { reviews: [], status: 'idle', error: null };

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
        state.reviews = action.payload;
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
// export const { deleteReview } = reviewsSlice.actions;
export const selectReviews = (state) => state.reviews.reviews;
export default reviewsSlice.reducer;
