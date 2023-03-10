import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isLogin: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		user: (state, action) => {
			state.user = action.payload;
		},
		login: (state, action) => {
			state.isLogin = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.isLogin = null;
		},
	},
});

export const {user, login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
