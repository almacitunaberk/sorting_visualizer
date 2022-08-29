import { configureStore } from '@reduxjs/toolkit';
import selectedAlgoReducer from './slices/selectedAlgo';
import toggleDashboardReducer from './slices/toggleDashboard';
import arraySliceReducer from './slices/arraySlice';

export default configureStore({
  reducer: {
    selectedAlgo: selectedAlgoReducer,
    toggleDashboard: toggleDashboardReducer,
    arrayState: arraySliceReducer,
  },
});
