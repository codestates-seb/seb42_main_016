import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tab: 0,
  isOn: [true, null, null],
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    activeTab: (state, action) => {
      state.tab = action.payload;
      state.isOn = state.isOn.map((el, idx) => (idx === action.payload ? true : null));
    },
  },
});

export const { activeTab } = tabSlice.actions;

export const selectTab = (state) => state.tab;

export default tabSlice.reducer;
