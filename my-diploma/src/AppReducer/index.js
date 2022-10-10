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
    cart: {},
    page: null,
    cartDelete: {
      cartState: {
        quantity: 0,
        totalPrice: 0,
      },
      removedItemId: null,
    },
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

    cartPageRequest: (state) => {
      state.isLoading = true;
    },
    cartPageSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload.data;
    },
    cartPageFailed: (state, { someError }) => {
      state.isLoading = false;
      state.error = someError;
    },

    deletePokemonFromCartRequest: (state) => {
      state.isLoading = true;
    },
    deletePokemonFromCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.cartDelete.cartState.quantity = payload.data.cartState.quantity;
      state.cartDelete.cartState.totalPrice = payload.data.cartState.totalPrice;
      state.cartDelete.removedItemId = payload.data.removedItemId;
      state.cart.totalPrice = payload.data.cartState.totalPrice;
      state.cart.quantity = payload.data.cartState.quantity;
      const foundPokemon = state.cart.itemsList.findIndex(
        (item) => item.id === payload.data.removedItemId
      );
      state.cart.itemsList.splice(foundPokemon, 1);
    },
    deletePokemonFromCartFailed: (state, { someError }) => {
      state.isLoading = false;
      state.error = someError;
    },

    whatPage: (state, { payload }) => {
      state.page = payload;
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
  cartPageRequest,
  cartPageSuccess,
  cartPageFailed,
  deletePokemonFromCartRequest,
  deletePokemonFromCartSuccess,
  deletePokemonFromCartFailed,
  whatPage,
} = authSlice.actions;

export default authSlice.reducer;
