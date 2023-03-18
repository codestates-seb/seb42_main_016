import { createSlice } from '@reduxjs/toolkit';

const reserveSlice = createSlice({
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

export const { setReserve, deleteReserve } = reserveSlice.actions;

export default reserveSlice.reducer;
