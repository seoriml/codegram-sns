import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import tabReducer from "./reducers";
import apiReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tab: tabReducer,
    api: apiReducer,
  },
});

export default store;
