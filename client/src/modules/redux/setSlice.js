import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: null,
  id: null,
};

export const setSlice = createSlice({
  name: 'set',
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUrl, setId } = setSlice.actions;

export const selectSet = (state) => state.set;

export default setSlice.reducer;
