import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "home",
};

const bottomSlice = createSlice({
  name: "bottom",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = bottomSlice.actions;
export default bottomSlice.reducer;
