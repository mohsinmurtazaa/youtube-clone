import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import searchSlice from "./Slices/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});
export default appStore;
