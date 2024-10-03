import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import tabReducer from "./reducers";
import apiReducer from "./apiSlice";
import validationReducer from "./validationSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tab: tabReducer,
    api: apiReducer,
    validation: validationReducer,
  },
});

export default store;
