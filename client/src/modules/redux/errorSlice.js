import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const notify = (errorMessage) => toast.error(errorMessage);

const initialState = {
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = true;
      notify(action.payload);
    },
  },
});

export const { setError } = errorSlice.actions;

export const selectError = (state) => state.error;

export default errorSlice.reducer;
