import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	edit: null,
	data: null,
};

export const editSlice = createSlice({
	name: 'edit',
	initialState,
	reducers: {
		edit: (state, action) => {
			state.edit = true;
			state.data = action.payload;
		},
		cancleEdit: (state) => {
			state.edit = null;
			state.data = null;
		},
	},
});

export const {edit, cancleEdit} = editSlice.actions;

export const selectEdit = (state) => state.edit;

export default editSlice.reducer;
