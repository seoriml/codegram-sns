import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalTitle: "",
  confirmButtonText: "",
  cancelButtonText: "",
  confirmActionId: null,
  cancelActionId: null,
};

const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState,
  reducers: {
    openConfirmModal: (state, action) => {
      document.body.style.overflow = "hidden";
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
    },
    closeConfirmModal: (state) => {
      document.body.style.overflow = "";
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openConfirmModal, closeConfirmModal } =
  confirmModalSlice.actions;

export default confirmModalSlice.reducer;
