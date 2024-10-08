// src/store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import playerReducer from "../features/player/playerSlice";
import { searchApi } from "../pages/search/services/searchApi";
import HistorySlice from "../pages/search/slice/HistorySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FavoriteSlice from "../pages/search/slice/FavoriteSlice";

import modelReducer from "..//features/login/ModelSlice";
import { homeApi } from "../pages/home/services/homeApi";
import { explorerAPi } from "../pages/explorer/services/explorerAPi";
import { profileApi } from "../pages/profile/services/profileApi";

// Define persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["history", "favorite"], // Reducers you want to persist
};

// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  episode: playerReducer,
  model: modelReducer,
  history: HistorySlice,
  favorite: FavoriteSlice,
  [searchApi.reducerPath]: searchApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  [explorerAPi.reducerPath]: explorerAPi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    })
      .concat(searchApi.middleware)
      .concat(profileApi.middleware)
      .concat(homeApi.middleware)
      .concat(explorerAPi.middleware),
});

export const persistor = persistStore(store);

export default store;
