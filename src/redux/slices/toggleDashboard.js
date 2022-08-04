import { createSlice } from '@reduxjs/toolkit';

export const toggleDashboardSlice = createSlice({
  name: 'toggleDashboard',
  initialState: {
    toggle: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggle } = toggleDashboardSlice.actions;
export default toggleDashboardSlice.reducer;
