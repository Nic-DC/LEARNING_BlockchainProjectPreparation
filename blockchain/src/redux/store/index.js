import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import utilsReducer from "../reducers/utilsReducer";
import plannerReducer from "./reducers/plannerReducer";
import taskReducer from "./reducers/plannerReducer";

import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const mainReducer = combineReducers({
  planner: plannerReducer,
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
