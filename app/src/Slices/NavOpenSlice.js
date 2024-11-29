import { createSlice } from "@reduxjs/toolkit";

export const navOpenSlice = createSlice({
  name: "isOpen",
  initialState: {
    value: false,
  },
  reducers: {
    openNav: (state) => {
      state.value = true;
    },
    closeNav: (state) => {
      state.value = false;
    },
  },
});

export const { openNav, closeNav } = navOpenSlice.actions;

export default navOpenSlice.reducer;
