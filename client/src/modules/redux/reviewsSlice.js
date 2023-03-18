import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REVIEW_ENDPOINT } from '../endpoints';
import API from '../API';
const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
    'X-refresh-Token': refresh,
  },
};
export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    const response = await API.get(REVIEW_ENDPOINT, { headers });
    return response.data;
  }
);
// export const addReview = createAsyncThunk(
//   'reviews/addReview',
//   async (initialReview) => {
//     const response = await axios.post(REVIEW_ENDPOINT, initialReview);
//     return response.data;
//   }
// );

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (id) => {
    await API.delete(`${REVIEW_ENDPOINT}/${id}`, { headers });
    return id;
  }
);

const initialState = { reviews: [], status: 'idle', error: null };

const reviewsSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    // deleteReview(state, action) {
    //   const { id } = action.payload;
    //   state.reviews = state.reviews.filter((review) => review.id !== id);
    // },
    updateReview(state, action) {
      const { id, text } = action.payload;
      const review = state.find((review) => review.id === id);
      if (review) {
        review.text = text;
      }
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
      // .addCase(addReview.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(addReview.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.reviews.push(action.payload);
      // })
      // .addCase(addReview.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // })
      // .addCase(deleteReview.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(deleteReview.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   const id = action.payload;
      //   state.reviews = state.reviews.filter((review) => review.id !== id);
      // })
      // .addCase(deleteReview.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // });
    },
  },
});

export const { updateReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
