import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folder: false,
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    folded: (state) => {
      state.folder = true;
    },
    unFolded: (state) => {
      state.folder = false;
    },
  },
});

export const { folded, unFolded } = folderSlice.actions;
export const selectFolderStatus = (state) => state.folder.folder;
export default folderSlice.reducer;
