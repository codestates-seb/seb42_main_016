import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  nick: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = localStorage.clear();
    },
    setNick: (state, action) => {
      state.nick = action.payload;
    },
  },
});

export const { login, logout, setNick } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
