import { configureStore, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import pokemonSlice from "../pages/SignUp/SignUpReducer/reducerSignUp";
import rootSaga from "../saga/rootSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const saga = createSagaMiddleware();

const reducers = combineReducers({
  pokemonSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [saga],
});

saga.run(rootSaga); //<---сюда рутсагу а в рутсаге писать сагавотчер и другие саги, если надо будет
