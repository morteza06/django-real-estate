import { configureStore } from '@reduxjs/toolkit';
import propertuReducer from '../features/properties/propertySlice'

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});
