import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	url: null,
	id: null,
};

export const deleteSlice = createSlice({
	name: 'delete',
	initialState,
	reducers: {
		deleteUrl: (state, action) => {
			state.url = action.payload;
		},
		deleteId: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const {deleteUrl, deleteId} = deleteSlice.actions;

export const selectDelete = (state) => state.delete;

export default deleteSlice.reducer;
