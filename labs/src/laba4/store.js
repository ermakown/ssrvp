import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'D:/React/ssrvp/labs/src/laba4/counter_slice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
