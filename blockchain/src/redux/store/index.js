import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
// import utilsReducer from "../reducers/utilsReducer";
import plannerReducer from "./reducers/plannerReducer";
import taskReducer from "./reducers/plannerReducer";

import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  planner: plannerReducer,
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
