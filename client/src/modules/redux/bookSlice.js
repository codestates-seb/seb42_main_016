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
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setDesign: (state, action) => {
      state.design = action.payload;
    },
    setDog: (state, action) => {
      state.dog = action.payload;
    },
    deleteBook: (state) => {
      state.date = null;
      state.time = null;
      state.design = null;
      state.dog = null;
    },
  },
});

export const { setDate, setTime, setDesign, setDog, deleteBook } = bookSlice.actions;

export const selectBook = (state) => state.book;

export default bookSlice.reducer;
