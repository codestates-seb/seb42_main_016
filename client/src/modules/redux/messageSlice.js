import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const error = (message) => toast.error(message);
const success = (message) => toast.success(message);
const loading = (message) => toast.loading(message);

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
    setLoading(state, action) {
      state.message = true;
      loading(action.payload);
    },
    setClose() {
      toast.dismiss();
    },
  },
});

export const { setError, setSuccess, setLoading, setClose } = messageSlice.actions;

export const selectError = (state) => state.message;

export default messageSlice.reducer;
