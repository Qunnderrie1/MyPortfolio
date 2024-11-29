import { configureStore } from "@reduxjs/toolkit";
import navOpenReducer from "./Slices/NavOpenSlice";

export default configureStore({
  reducer: {
    isOpen: navOpenReducer,
  },
});
