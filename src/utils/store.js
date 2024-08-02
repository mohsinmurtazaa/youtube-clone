import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import chatSlice from "./Slices/chatSlice";
import searchSlice from "./Slices/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default appStore;
