import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  confirmButtonText: "",
  cancelButtonText: "",
  confirmAction: null,
  cancelAction: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalTitle, onConfirm, onCancel, confirmText, cancelText } =
        action.payload;
      state.isOpen = true;
      state.title = modalTitle;
      state.confirmButtonText = confirmText;
      state.cancelButtonText = cancelText;
      state.confirmAction = onConfirm;
      state.cancelAction = onCancel;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.confirmButtonText = "";
      state.cancelButtonText = "";
      state.confirmAction = null;
      state.cancelAction = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
