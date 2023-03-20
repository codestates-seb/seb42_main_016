import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSubmit: false,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setIsSubmit(state, action) {
      state.isSubmit = action.payload;
    },
  },
});

export const { setIsSubmit } = likeSlice.actions;

export const selectLike = (state) => state.like;

export default likeSlice.reducer;
