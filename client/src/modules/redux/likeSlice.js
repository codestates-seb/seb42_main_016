import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSubmit: false,
  likeId: 0,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setIsSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
    setLikeId: (state, action) => {
      state.likeId = action.payload;
    },
  },
});

export const { setIsSubmit, setLikeId } = likeSlice.actions;

export const selectLike = (state) => state.like;

export default likeSlice.reducer;
