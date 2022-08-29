import { createSlice } from '@reduxjs/toolkit';

const selectedAlgoSlice = createSlice({
  name: 'selectedAlgo',
  initialState: {
    algo: 'merge',
    isStop: false,
  },
  reducers: {
    changeAlgo: (state, action) => {
      state.algo = action.payload;
    },
    setIsStop: (state, action) => {
      state.isStop = action.payload;
    },
    toggleIsStop: (state) => {
      state.isStop = !state.isStop;
    },
  },
});

export const { changeAlgo, setIsStop, toggleIsStop } = selectedAlgoSlice.actions;
export default selectedAlgoSlice.reducer;
