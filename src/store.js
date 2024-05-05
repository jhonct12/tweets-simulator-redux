import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import {
  getStateLocalStorage,
  setStateLocalStorage,
} from "./utils/localStorage";

const localStorageState = getStateLocalStorage();

const store = configureStore({
  reducer: reducers,
  preloadedState: localStorageState,
});

store.subscribe(() =>
  setStateLocalStorage({ tweets: store.getState().tweets })
);

export default store;
