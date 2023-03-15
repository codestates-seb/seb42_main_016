import { createSlice } from '@reduxjs/toolkit';



export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews:[],
    },
    reducers:{
        setReviews:(state,action)=>{
            state.reviews = action.payload
        },
        addReview: (state,action)=>{
            state.reviews.push(action.payload)
        },
        removeReview: (state,action)=>{
            state.reviews = state.reviews.filter(review =>
                review.id!==action.payload)
        },
        updateReview:(state,action)=>{
          state.reviews = action.payload
        }
    }
})
export const { setReviews,addReview,removeReview,updateReview } = reviewSlice.actions;

export default reviewSlice.reducer;
