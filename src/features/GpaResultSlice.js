import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gpaResult: null,
  gpa: "",
};

const gpaResultSlice = createSlice({
  name: "gpaResult",
  initialState,
  reducers: {
    showResult: (state, action) => {
      state.gpaResult = action.payload.courses;
      state.gpa = action.payload.gpa;
    },
    clearResult: (state) => {
      state.gpaResult = null;
      state.gpa = "";
    },
  },
});

export const { showResult, clearResult } = gpaResultSlice.actions;
export const selectGpaResult = (state) => state.gpaResult.gpaResult;
export const selectGpa = (state) => state.gpaResult.gpa;
export default gpaResultSlice.reducer;
