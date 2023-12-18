import { createSlice } from '@reduxjs/toolkit';
import SectionFeaturesData from './SectionFeaturesData.json';

export const featuresSlice = createSlice({
  name: 'features',
  initialState: {
    features: SectionFeaturesData,
  },
});

export default featuresSlice.reducer;
