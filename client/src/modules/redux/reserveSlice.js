import { createSlice } from '@reduxjs/toolkit';

export const reserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reservation: [],
  },

  reducers: {
    setReserve: (state, action) => {
      state.reservation = action.payload;
    },
    deleteReserve: (state, action) => {
      const id = action.payload;
      return state.filter((reserve) => reserve.id !== id);
    },
  },
});

export let { setReserve, deleteReserve } = reserveSlice.actions;

export default reserveSlice.reducer;
