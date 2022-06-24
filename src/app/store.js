import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todoSlice"
import gpaReducer from "../features/gpaSlice";
import folderReducer from "../features/folderSlice";

export const store = configureStore({
  reducer: {
    // todos:todoReducer
    gpa: gpaReducer,
    folder: folderReducer,
  },
});
