import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import emptySlice from './emptySlice';
import modalSlice from './modalSlice';
import editSlice from './editSlice';
import setSlice from './setSlice';
import dogSlice from './dogSlice';
import tabSlice from './tabSlice';
import loadingSlice from './loadingSlice';
import reserveSlice from './reserveSlice';
import likeSlice from './likeSlice';
import shopSlice from './shopSlice';

const store = configureStore({
	reducer: {
		user: userSlice,
		empty: emptySlice,
		modal: modalSlice,
		edit: editSlice,
		set: setSlice,
		dog: dogSlice,
		tab: tabSlice,
		loading: loadingSlice,
		reserve: reserveSlice,
		like: likeSlice,
		shop: shopSlice,
	},
});

export default store;
