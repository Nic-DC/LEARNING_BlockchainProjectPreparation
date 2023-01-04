import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "../reducers/utilsReducer";

const store = configureStore({
  reducer: utilsReducer,
});

export default store;
