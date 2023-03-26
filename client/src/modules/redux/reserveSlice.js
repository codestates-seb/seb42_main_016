import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API';
import { RESERVATION_ENDPOINT } from '../endpoints';

const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');
const config = {
  headers: {
    Authorization: token,
    refresh: refresh,
  },
};

export const fetchReserve = createAsyncThunk('reserve/fetchReserve', async () => {
  const response = await API.get(`${RESERVATION_ENDPOINT}?page=${1}&size=${10}`, config);
  return response.data.data;
});
export const cancelReserve = createAsyncThunk('reserve/cancelReserve', async (id) => {
  await API.delete(`${RESERVATION_ENDPOINT}/${id}`, config);
  return id;
});
const reserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reservation: [],
    status: 'idle',
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReserve.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReserve.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservation = action.payload;
      })
      .addCase(fetchReserve.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(cancelReserve.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cancelReserve.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservation = state.reservation.filter(
          (reserve) => reserve.reservationId !== action.payload,
        );
      })
      .addCase(cancelReserve.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectReserve = (state) => state.reserve.reservation;
export default reserveSlice.reducer;
