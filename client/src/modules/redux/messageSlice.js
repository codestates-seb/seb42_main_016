import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const error = (message) => toast.error(message);
const success = (message) => toast.success(message);
const time = (message) =>
  toast(message, {
    icon: '⏰',
  });

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
    setTime(state, action) {
      state.message = true;
      time(action.payload);
    },
  },
});

export const { setError, setSuccess, setTime } = messageSlice.actions;

export default messageSlice.reducer;
