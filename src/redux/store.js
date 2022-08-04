import { configureStore } from '@reduxjs/toolkit';
import selectedAlgoReducer from './slices/selectedAlgo';
import toggleDashboardReducer from './slices/toggleDashboard';

export default configureStore({
  reducer: {
    selectedAlgo: selectedAlgoReducer,
    toggleDashboard: toggleDashboardReducer,
  },
});
