import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produce from 'immer';
import API from '../API';
import { MYDOG_ENDPOINT } from '../endpoints';

const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');
const config = {
  headers: {
    Authorization: token,
    refresh: refresh,
  },
};

const asyncUpFetch = createAsyncThunk('dogSlice/asyncUpFetch', async () => {
  const response = await API.get(MYDOG_ENDPOINT, config);
  return response.data;
});

const initialState = { value: [], status: 'idle' };

const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    deleteDog: (state, action) => {
      return produce(state, (draftState) => {
        draftState.value = draftState.value.filter((item) => item.dogId !== action.payload);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncUpFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncUpFetch.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'succeeded';
      })
      .addCase(asyncUpFetch.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { deleteDog } = dogSlice.actions;

export { asyncUpFetch };

export const selectDog = (state) => state.dog.value;

export default dogSlice.reducer;
