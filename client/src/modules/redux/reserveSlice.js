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

export const fetchReserve = createAsyncThunk('reserve/fetchReserve', async (page) => {
  const response = await API.get(`${RESERVATION_ENDPOINT}?page=${page}&size=${5}`, config);
  return response.data;
});
export const cancelReserve = createAsyncThunk('reserve/cancelReserve', async (id) => {
  await API.delete(`${RESERVATION_ENDPOINT}/${id}`, config);
  return id;
});
const reserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reservation: [],
    pageInfo: { totalElements: null },
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
        state.reservation = action.payload.data;
        state.pageInfo.totalElements = action.payload.pageInfo.totalElements;
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
export const selectPageInfo = (state) => state.reserve.pageInfo;
export default reserveSlice.reducer;
