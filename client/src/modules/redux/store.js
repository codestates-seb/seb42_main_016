import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import modalSlice from './modalSlice';
import editSlice from './editSlice';
import setSlice from './setSlice';
import dogSlice from './dogSlice';
import tabSlice from './tabSlice';
import loadingSlice from './loadingSlice';
import reserveSlice from './reserveSlice';
import likeSlice from './likeSlice';
import reviewsReducer from './reviewsSlice';
import shopSlice from './shopSlice';
import bookSlice from './bookSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    edit: editSlice,
    set: setSlice,
    dog: dogSlice,
    tab: tabSlice,
    loading: loadingSlice,
    reserve: reserveSlice,
    like: likeSlice,
    reviews: reviewsReducer,
    shop: shopSlice,
    book: bookSlice,
  },
});

export default store;
