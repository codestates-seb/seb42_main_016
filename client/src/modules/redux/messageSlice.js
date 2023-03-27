import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const error = (message) => toast.error(message);
const success = (message) => toast.success(message);

const initialState = {
  message: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setError(state, action) {
      state.message = true;
      error(action.payload);
    },
    setSuccess(state, action) {
      state.message = true;
      success(action.payload);
    },
  },
});

export const { setError, setSuccess } = messageSlice.actions;

export const selectError = (state) => state.message;

export default messageSlice.reducer;
