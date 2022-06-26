import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todoSlice"
import gpaReducer from "../features/gpaSlice";
import folderReducer from "../features/folderSlice";
import gpaResultReducer from "../features/GpaResultSlice";

export const store = configureStore({
  reducer: {
    // todos:todoReducer
    gpa: gpaReducer,
    folder: folderReducer,
    gpaResult: gpaResultReducer,
  },
});
