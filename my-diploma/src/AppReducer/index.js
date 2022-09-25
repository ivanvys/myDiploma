import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../constants";

const authSlice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    signInError: null,
    userInfo: {},
    isAuth: false,
    accessToken: null,
  },
  reducers: {
    signInRequest: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state, { payload }) => {
      state.isLoading = false;
      const { accessToken, ...userInfo } = payload.data;
      state.userInfo = userInfo;
      state.accessToken = accessToken;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
      state.isAuth = true;
    },
    signInFailed: (state, { someError }) => {
      state.isLoading = false;
      state.signInError = someError;
    },
  },
});

export const { signInRequest, signInSuccess, signInFailed } = authSlice.actions;

export default authSlice.reducer;
