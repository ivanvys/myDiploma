import { api } from "../../../../src/config/config";

export const productsPageRequest = (page) =>
  api.get(`/products?page=${page}&limit=19`);

export const addPokemonToCart = (pokeInfo) => api.post(`/cart/item`, pokeInfo);
