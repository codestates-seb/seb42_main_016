import {createSlice} from '@reduxjs/toolkit';

const key = 'user';

const initialState = {
	user: JSON.parse(localStorage.getItem(key)) || null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = localStorage.setItem(key, JSON.stringify(action.payload));
		},
		logout: (state) => {
			state.user = localStorage.removeItem(key);
		},
	},
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
