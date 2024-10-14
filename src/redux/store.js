import { configureStore } from "@reduxjs/toolkit";
import optionsModalReducer from "./optionsModalSlice";
import confirmModalReducer from "./confirmModalSlice";
import apiReducer from "./apiSlice";
import validationReducer from "./validationSlice";
import bottomReducer from "./bottomSlice";
import commentReducer from "./commentSlice";

const store = configureStore({
  reducer: {
    optionsModal: optionsModalReducer,
    confirmModal: confirmModalReducer,
    api: apiReducer,
    validation: validationReducer,
    bottom: bottomReducer,
    comments: commentReducer,
  },
});

export default store;
