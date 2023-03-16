import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: '',
  create: '',
  review: '',
  mydog: '',
};

export const emptySlice = createSlice({
  name: 'empty',
  initialState,
  reducers: {
    book: (state) => {
      state.book = '예약 내역이 없습니다.';
    },
    create: (state) => {
      state.create = '작성 가능한 리뷰가 없습니다.';
    },
    review: (state) => {
      state.review = '작성한 리뷰가 없습니다.';
    },
    mydog: (state) => {
      state.mydog = '등록된 강아지가 없습니다.';
    },
  },
});

export const { book, create, review, mydog } = emptySlice.actions;

export default emptySlice.reducer;
