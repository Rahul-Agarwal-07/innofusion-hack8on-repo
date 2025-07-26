import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from '../store/features/summarySlice';

export const store = configureStore({
  reducer: {
    summary: summaryReducer,
  },
});
