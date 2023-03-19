import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: null,
  time: null,
  design: null,
  dog: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    clickDate: (state, action) => {
      state.date = action.payload;
    },
    clickTime: (state, action) => {
      state.time = action.payload;
    },
    clickDesign: (state, action) => {
      state.design = action.payload;
    },
    clickDog: (state, action) => {
      state.dog = action.payload;
    },
    clearBook: (state) => {
      state.date = null;
      state.time = null;
      state.design = null;
      state.dog = null;
    },
  },
});

export const { clickDate, clickTime, clickDesign, clickDog, clearBook } = bookSlice.actions;

export const selectBook = (state) => state.book;

export default bookSlice.reducer;
