import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../constants";

const authSlice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    error: null,
    isAuth: false,
    accessToken: null,
    userInfo: {},
    detailPokemonInfo: {},
    products: [],
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
      state.error = someError;
    },

    productsRequest: (state) => {
      state.isLoading = true;
    },
    productsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.data;
    },
    productsFailed: (state, { someError }) => {
      state.isLoading = false;
      state.error = someError;
    },

    detailPokemonInfoRequest: (state) => {
      state.isLoading = true;
    },
    detailPokemonInfoSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.detailPokemonInfo = payload.data;
    },
    detailPokemonInfoFailed: (state, { someError }) => {
      state.isLoading = false;
      state.error = someError;
    },
  },
});

export const {
  signInRequest,
  signInSuccess,
  signInFailed,
  productsRequest,
  productsSuccess,
  productsFailed,
  detailPokemonInfoRequest,
  detailPokemonInfoSuccess,
  detailPokemonInfoFailed,
} = authSlice.actions;

export default authSlice.reducer;
