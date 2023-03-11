import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import emptySlice from './emptySlice';
import modalSlice from './modalSlice';

const store = configureStore({
	reducer: {
		user: userSlice,
		empty: emptySlice,
		modal: modalSlice,
	},
});

export default store;
