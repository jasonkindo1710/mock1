import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    RegisterStart: (state) => {
      state.register.isFetching = true;
    },
    RegisterSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    RegisterFailed: (state) => {
      state.register.isFetching = false;
      state.register.success = false;
      state.register.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  RegisterStart,
  RegisterSuccess,
  RegisterFailed,
} = authSlice.actions;

export default authSlice.reducer;