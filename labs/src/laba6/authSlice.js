import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  currentUserEmail: localStorage.getItem("currentUserEmail") || null,
  currentUserId: localStorage.getItem("currentUserId") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.currentUserEmail = action.payload.email;
      state.currentUserId = action.payload.id;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUserEmail = null;
      state.currentUserId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
