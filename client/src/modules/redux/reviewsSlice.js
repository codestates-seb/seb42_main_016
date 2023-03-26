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

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
  await API.delete(`${REVIEW_ENDPOINT}/${id}`, config);
});

const initialState = { reviews: [], status: 'idle', error: null };

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    // deleteReview(state, action) {
    //   const reviewId = action.payload;
    //   state.reviews.reviews.splice(reviewId, 1);
    // },
  },
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
      });
    // .addCase(deleteReview.fulfilled, (state, action) => {
    //   const { payload: reviewId } = action;
    //   state.reviews.reviews = state.reviews.reviews.filter(
    //     (review) => review.reviewId !== reviewId,
    //   );
    // });
  },
});
// export const { deleteReview } = reviewsSlice.actions;
export const selectReviews = (state) => state.reviews.reviews;
export default reviewsSlice.reducer;
