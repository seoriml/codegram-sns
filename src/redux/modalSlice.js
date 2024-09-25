import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: "confirm",
  modalTitle: "",
  confirmButtonText: "",
  cancelButtonText: "",
  confirmActionId: null,
  cancelActionId: null,
  options: [],
  optionActions: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
