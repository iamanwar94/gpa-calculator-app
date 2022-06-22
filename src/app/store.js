import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todoSlice"
import gpaReducer from "../features/gpaSlice";

export const store = configureStore({
  reducer: {
    // todos:todoReducer
    gpa: gpaReducer,
  },
});
