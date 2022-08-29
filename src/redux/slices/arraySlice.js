import { createSlice } from '@reduxjs/toolkit';

const arraySlice = createSlice({
  name: 'arraySlice',
  initialState: {
    arraySize: 100,
    array: [],
    largestValue: 10,
    isGenerateNew: false,
  },
  reducers: {
    setArraySize: (state, action) => {
      state.arraySize = action.payload;
    },
    setArray: (state, action) => {
      state.array = action.payload;
    },
    setLargestValue: (state, action) => {
      state.largestValue = action.payload;
    },
    setIsGenerateNew: (state, action) => {
      state.isGenerateNew = action.payload;
    },
    toggleIsGenerateNew: (state) => {
      state.isGenerateNew = !state.isGenerateNew;
    },
  },
});

export const { setArraySize, setArray, setLargestValue, setIsGenerateNew, toggleIsGenerateNew } = arraySlice.actions;

export default arraySlice.reducer;
