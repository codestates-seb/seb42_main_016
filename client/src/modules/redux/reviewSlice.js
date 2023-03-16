import { createSlice } from '@reduxjs/toolkit';
import useAxios from '../../hooks/useAxios';

export const addReview = (formData) => async (dispatch) => {
    try {
      const response = await useAxios.POST("reviews", formData);
      dispatch(reviewAdded(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  
const initialState = {
    reviews: [],
    status: "idle",
    error: null,
  };

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers:{
        reviewsLoading: (state) => {
            state.status = "loading";
          },
          reviewsReceived: (state, action) => {
            state.status = "succeeded";
            state.reviews = action.payload;
          },
          reviewsRequestFailed: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          },
          reviewAdded: (state,action)=>{
            const { photo,text } = action.payload
            state.reviews.push({photo,text})
        },
            reviewDeleted : (state,action)=>{
            state.reviews = state.reviews.filter(review =>
                review.id!==action.payload)
        },
            reviewUpdated:(state,action)=>{
            const {id, photo, text} = action.payload
            const review = state.reviews.find((review)=>review.id===id);
            if(review){
                review.photo=photo;
                review.text=text;
                
            }
        },
      },
})
export const { reviewsLoading,reviewsReceived,reviewsRequestFailed,
    reviewAdded,reviewUpdated,reviewDeleted, } = reviewSlice.actions;
export default reviewSlice.reducer;
