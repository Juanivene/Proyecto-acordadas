import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    selectedData: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedData = action.payload || null; // Si se pasa información, la guarda
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedData = null; // Limpia los datos al cerrar
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
