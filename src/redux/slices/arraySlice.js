import { createSlice } from '@reduxjs/toolkit';

const arraySlice = createSlice({
  name: 'arraySlice',
  initialState: {
    arraySize: 100,
    array: [],
    largestValue: 10,
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
    generateArray: (state, action) => {},
  },
});

export const { setArraySize, setArray, setLargestValue } = arraySlice.actions;

export default arraySlice.reducer;
