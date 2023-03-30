import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  scroll: 0,
  list: [],
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPage, setScroll, setList } = scrollSlice.actions;

export const selectScroll = (state) => state.scroll;

export default scrollSlice.reducer;
