import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import tabReducer from "./reducers";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tab: tabReducer,
  },
});

export default store;
