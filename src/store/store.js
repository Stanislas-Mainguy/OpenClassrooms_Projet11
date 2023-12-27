import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import featuresReducer from './slices/features/featuresSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    features: featuresReducer,
  },
});

export default store;
