import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../API';

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
      const response = await API.get('/reviews');
      return response.data;
    }
  );
export const addReview = createAsyncThunk('reviews/addReview', async (initialReview) => {
  const response = await API.post('/reviews', initialReview);
  return response.data;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
  await API.delete(`/reviews/${id}`);
  return id;
});

const initialState = { reviews: [], status: 'idle', error: null};

const reviewsSlice = createSlice({
    name: 'review',
    initialState,
    reducers:{
        updateReview(state,action) {
            const {id, text} = action.payload;
            const review = state.find(review => review.id === id);
            if(review){
                review.text = text;
            }
        },
        deleteReview(state,action) {
            const {id} = action.payload;
            state.reviews = state.reviews.filter((review) => review.id !== id);
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
                  })
                  .addCase(addReview.pending, (state) => {
                    state.status = 'loading';
                  })
                  .addCase(addReview.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.reviews.push(action.payload);
                  })
                  .addCase(addReview.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                  })
                  .addCase(deleteReview.pending, (state) => {
                    state.status = 'loading';
                  })
                  .addCase(deleteReview.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    const id = action.payload;
                    state.reviews = state.reviews.filter((review) => review.id !== id);
                  })
                  .addCase(deleteReview.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                  });
        }
    }
})


export const { updateReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;