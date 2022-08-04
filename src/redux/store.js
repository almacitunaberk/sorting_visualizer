import { configureStore } from '@reduxjs/toolkit';
import selectedAlgoReducer from './slices/selectedAlgo';

export default configureStore({
  reducer: {
    selectedAlgo: selectedAlgoReducer,
  },
});
