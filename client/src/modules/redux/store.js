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
import reviewsSlice from './reviewsSlice';
import shopSlice from './shopSlice';
import bookSlice from './bookSlice';
import messageSlice from './messageSlice';
import locationSlice from './locationSlice';
import nonreviewSlice from './nonreviewSlice';
import scrollSlice from './scrollSlice';

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
    reviews: reviewsSlice,
    shop: shopSlice,
    book: bookSlice,
    message: messageSlice,
    location: locationSlice,
    nonreview: nonreviewSlice,
    scroll: scrollSlice,
  },
});

export default store;
