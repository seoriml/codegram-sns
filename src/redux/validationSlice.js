import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailValid: false,
  passwordValid: false,
  accountNameValid: false,
  emailValue: "",
  passwordValue: "",
};

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    updateValidState2: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    updateValidState: (state, action) => {
      const { name, value, name2, value2 } = action.payload;
      state[name] = value;
      state[name2] = value2;
    },
  },
});

export const { updateValidState, updateValidState2 } = validationSlice.actions;

export default validationSlice.reducer;
