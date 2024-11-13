import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  options: [],
  optionActions: [],
};

const optionsModalSlice = createSlice({
  name: "optionsModal",
  initialState,
  reducers: {
    openOptionsModal: (state, action) => {
      document.body.style.overflow = "hidden";
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
      
    },
    closeOptionsModal: (state) => {
      document.body.style.overflow = "";
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openOptionsModal, closeOptionsModal } =
  optionsModalSlice.actions;

export default optionsModalSlice.reducer;
