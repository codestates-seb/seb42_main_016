import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  like: false,
  isSubmit: false,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike(state, action) {
      state.like = action.payload;
    },
    setIsSubmit(state, action) {
      state.isSubmit = action.payload;
    },
  },
});

export const { setLike, setIsSubmit } = likeSlice.actions;

export const selectLike = (state) => state.like;

export default likeSlice.reducer;
