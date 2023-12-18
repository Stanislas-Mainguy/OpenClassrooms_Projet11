import { createSlice } from "@reduxjs/toolkit";
import SectionFeaturesData from "./SectionFeaturesData.json";

export const featuresSlice = createSlice({
    name: 'features',
    initialState: SectionFeaturesData,
});

export const selectFeatures = state => state.features;
export default featuresSlice.reducer;