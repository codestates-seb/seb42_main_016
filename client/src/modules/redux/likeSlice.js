import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSubmit: false,
  likeId: 0,
  likeCount: 0,
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
    setLikeCount: (state, action) => {
      state.likeCount = action.payload;
    },
  },
});

export const { setIsSubmit, setLikeId, setLikeCount } = likeSlice.actions;

export const selectLike = (state) => state.like;

export default likeSlice.reducer;
