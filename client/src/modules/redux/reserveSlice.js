import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API';
import { RESERVATION_ENDPOINT } from '../endpoints';

export const cancelReserve = createAsyncThunk('reserve/cancelReserve', async (id) => {
  const response = await API.delete(`${RESERVATION_ENDPOINT}/${id}`);
  return response.data;
});
const reserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reservation: [],
    status: null,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cancelReserve.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cancelReserve.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const canceledReservation = action.payload;
        const updatedReservations = state.reserve.filter(
          (reserve) => reserve.id !== canceledReservation.id,
        );
        state.reserve = updatedReservations;
      })
      .addCase(cancelReserve.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reserveSlice.reducer;
