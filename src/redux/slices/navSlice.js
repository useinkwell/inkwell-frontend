import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnythingOpen: false,
  navWidthState: "w-0",
  overlayState: "hidden",
  navIsOpen: false,
  searchIsOpen: false,
  searchWidth: "w-0",
  searchWidthLarge: "w-0",
  notificationIsOpen: false,
  notificationWidth: "w-0",
  notificationWidthLarge: "w-0",
};

const navSlice = createSlice({
  name: "navigations",
  initialState,
  reducers: {
    navOpen: (state, action) => {
      state.navWidthState = "w-1/2";
      state.navIsOpen = true;
    },
    navClose: (state, action) => {
      state.navWidthState = "w-0";
      state.navIsOpen = false;
    },
    showOverlay: (state, action) => {
      state.overlayState = "block";
    },
    closeOverlay: (state, action) => {
      state.overlayState = "hidden";
    },
    searchOpen: (state, action) => {
      state.searchIsOpen = true;
      state.searchWidth = "w-full";
      state.searchWidthLarge = "w-1/2";
    },
    searchClose: (state, action) => {
      state.searchIsOpen = false;
      state.searchWidth = "w-0";
      state.searchWidthLarge = "w-0";
    },
    notificationOpen: (state, action) => {
      state.notificationIsOpen = true;
      state.notificationWidth = "w-full";
      state.notificationWidthLarge = "w-6/12";
    },
    notificationClose: (state, action) => {
      state.notificationIsOpen = false;
      state.notificationWidth = "w-0";
      state.notificationWidthLarge = "w-0";
    },
    anythingOpen: (state, action) => {
      state.isAnythingOpen = true;
    },
    anythingClose: (state, action) => {
      state.isAnythingOpen = false;
    },
    updateAnything: (state, action) => {
      if (state.navIsOpen || state.searchIsOpen || state.notificationIsOpen) {
        state.isAnythingOpen = true;
      } else {
        state.isAnythingOpen = false;
      }
    },
  },
});
export const {
  navOpen,
  navClose,
  showOverlay,
  closeOverlay,
  searchClose,
  searchOpen,
  notificationClose,
  notificationOpen,
  updateAnythingState,
  anythingClose,
  anythingOpen,
  updateAnything,
} = navSlice.actions;
export default navSlice.reducer;
