import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produce from 'immer';
import API from '../API';

const asyncUpFetch = createAsyncThunk('dogSlice/asyncUpFetch', async () => {
  const response = await API.get('/my-dogs');
  return response.data;
});

const initialState = { value: [], status: 'idle' };

const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    deleteDog: (state, action) => {
      return produce(state, (draftState) => {
        draftState.value = draftState.value.filter((item) => item.id !== action.payload);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncUpFetch.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(asyncUpFetch.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'succeeded';
      })
      .addCase(asyncUpFetch.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { deleteDog } = dogSlice.actions;

export { asyncUpFetch };

export const selectDog = (state) => state.dog.value;

export default dogSlice.reducer;
