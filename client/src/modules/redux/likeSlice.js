import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	like: false,
};

const likeSlice = createSlice({
	name: 'like',
	initialState,
	reducers: {
		setLike(state, action) {
			state.like = action.payload;
		},
	},
});

export const {setLike} = likeSlice.actions;

export const selectLike = (state) => state.like;

export default likeSlice.reducer;
