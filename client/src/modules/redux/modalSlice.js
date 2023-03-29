import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: '',
  isOpen: false,
  option: {
    dogWeight: '',
    dogSpecies: '',
  },
  data: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalType, data } = action.payload;
      state.modalType = modalType;
      state.isOpen = true;
      state.data = data;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
    },
    selectOption: (state, action) => {
      state.isOpen = false;
      state.option = action.payload;
    },
  },
});

export const { openModal, closeModal, selectOption } = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
