import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";

/** Reducers */
import counterSlice from "./slices/counterSlice";
import roomSlice from "./slices/roomSlice";
import playersSlice from "./slices/playersSlice";

/** Implementation */
const rootReducer = combineReducers({
  counter: counterSlice,
  room: roomSlice,
  players: playersSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
