import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gpaResult: [],
};

const gpaResultSlice = createSlice({
  name: "gpaResult",
  initialState,
  reducers: {
    showResult: (state, action) => {
      state.gpaResult.push(action.payload);
    },
    clearResult: (state) => {
      state.gpaResult = [];
    },
  },
});

export const { showResult, clearResult } = gpaResultSlice.actions;
export const selectGpaResult = (state) => state.gpaResult.gpaResult;
export default gpaResultSlice.reducer;
