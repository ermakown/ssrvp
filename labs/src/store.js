// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'D:/React/ssrvp/labs/src/laba4/counter_slice.js';
import authReducer from 'D:/React/ssrvp/labs/src/laba6/authSlice.js';
import feedbackReducer from 'D:/React/ssrvp/labs/src/laba6/feedbackSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    feedback: feedbackReducer,
  },
});
