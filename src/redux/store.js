import { configureStore } from "@reduxjs/toolkit";
import optionsModalReducer from "./optionsModalSlice";
import confirmModalReducer from "./confirmModalSlice";
import tabReducer from "./reducers";
import apiReducer from "./apiSlice";
import validationReducer from "./validationSlice";

const store = configureStore({
  reducer: {
    optionsModal: optionsModalReducer,
    confirmModal: confirmModalReducer,
    tab: tabReducer,
    api: apiReducer,
    validation: validationReducer,
  },
});

export default store;
