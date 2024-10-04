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
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
    },
    closeOptionsModal: (state) => {
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
