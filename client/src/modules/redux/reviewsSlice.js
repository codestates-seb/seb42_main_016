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
  return response.data;
});
// export const addReview = createAsyncThunk(
//   'reviews/addReview',
//   async (initialReview) => {
//     const response = await axios.post(REVIEW_ENDPOINT, initialReview);
//     return response.data;
//   }
// );

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (reviewId) => {
  await API.delete(`${REVIEW_ENDPOINT}/${reviewId}`, config);
  return reviewId;
});

const initialState = { reviews: [], status: 'idle', error: null };

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    // deleteReview(state, action) {
    //   const { id } = action.payload;
    //   state.reviews = state.reviews.filter((review) => review.id !== id);
    // },
    // updateReview(state, action) {
    //   const { id, text } = action.payload;
    //   const review = state.find((review) => review.id === id);
    //   if (review) {
    //     review.text = text;
    //   }
    // },
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
    },
  },
});

export const { updateReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
