import { createSlice } from "@reduxjs/toolkit";

// 헤더 상태
const scrollHeaderSlice = createSlice({
  name: "header",
  initialState: {
    isVisible: true, // 헤더 초기 상태
  },

  reducers: {
    showHeader: (state) => {
      state.isVisible = true; // 헤더 보이기
    },
    hideHeader: (state) => {
      state.isVisible = false; // 헤더 숨기기
    },
  },
});

export const { showHeader, hideHeader } = scrollHeaderSlice.actions;

export default scrollHeaderSlice.reducer;
