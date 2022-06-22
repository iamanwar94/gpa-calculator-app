import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gpa: false,
};

const gpaSlice = createSlice({
  name: "gpa",
  initialState,
  reducers: {
    clickTrue: (state) => {
      state.gpa = true;
    },
    clickFalse: (state) => {
      state.gpa = false;
    },
  },
});

export const { clickTrue, clickFalse } = gpaSlice.actions;
export const selectGpa = (state) => state.gpa.gpa;
export default gpaSlice.reducer;
