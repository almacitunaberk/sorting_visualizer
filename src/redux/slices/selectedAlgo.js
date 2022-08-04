import { createSlice } from '@reduxjs/toolkit';

export const selectedAlgoSlice = createSlice({
  name: 'selectedAlgo',
  initialState: {
    algo: 'merge',
  },
  reducers: {
    changeAlgo: (state, action) => {
      state.algo = action.payload;
    },
  },
});

export const { changeAlgo } = selectedAlgoSlice.actions;
export default selectedAlgoSlice.reducer;
