import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import emptySlice from './emptySlice';
import modalSlice from './modalSlice';
import editSlice from './editSlice';
import deleteSlice from './deleteSlice';
import dogSlice from './dogSlice';
import tabSlice from './tabSlice';
import loadingSlice from './loadingSlice';

const store = configureStore({
	reducer: {
		user: userSlice,
		empty: emptySlice,
		modal: modalSlice,
		edit: editSlice,
		delete: deleteSlice,
		dog: dogSlice,
		tab: tabSlice,
		loading: loadingSlice,
	},
});

export default store;
