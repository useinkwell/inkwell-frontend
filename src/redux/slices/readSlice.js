import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  readerIsOpen: false,
  readingIsOpen: false,
  readerState: "w-0",
  readingState: "w-0",
  rOverlayState: "hidden",
  followState: false,
};

const readSlice = createSlice({
  name: "readSlice",
  initialState,
  reducers: {
    readerOpen: (state, action) => {
      state.readerIsOpen = true;
      state.rOverlayState = "block";
    },
    readerClose: (state, action) => {
      state.readerIsOpen = false;
      state.rOverlayState = "hidden";
    },
    readingOpen: (state, action) => {
      state.readingIsOpen = true;
      state.rOverlayState = "block";
    },
    readingClose: (state, action) => {
      state.readingIsOpen = false;
      state.rOverlayState = "hidden";
    },
  },
});

export const { readerOpen, readerClose, readingClose, readingOpen } =
  readSlice.actions;
export default readSlice.reducer;
