import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});
export default appStore;
