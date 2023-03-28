import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: 0,
  lng: 0,
  address: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLat(state, action) {
      state.lat = action.payload;
    },
    setLng(state, action) {
      state.lng = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { setLat, setLng, setAddress } = locationSlice.actions;

export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
