import { createSlice } from '@reduxjs/toolkit';

const defaultLat = '37.5044953';
const defaultLng = '127.0491212';

const initialState = {
  lat: defaultLat,
  lng: defaultLng,
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
