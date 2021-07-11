import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
  key:'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig,basketReducer)



// The global store
export const store = configureStore({
  reducer: {
    basket: persistedReducer,
  },
});

export const persistor = persistStore(store);