import { createSlice } from '@reduxjs/toolkit';

const toggleDashboardSlice = createSlice({
  name: 'toggleDashboard',
  initialState: {
    toggle: false,
    hide: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    setToggleTrue: (state) => {
      state.toggle = true;
    },
    setToggleFalse: (state) => {
      state.toggle = false;
    },
    toggleHide: (state) => {
      state.hide = !state.hide;
    },
    setHideTrue: (state) => {
      state.hide = true;
    },
    setHideFalse: (state) => {
      state.hide = false;
    },
  },
});

export const { toggle, setToggleTrue, setToggleFalse, setHideTrue, setHideFalse, toggleHide } =
  toggleDashboardSlice.actions;
export default toggleDashboardSlice.reducer;
