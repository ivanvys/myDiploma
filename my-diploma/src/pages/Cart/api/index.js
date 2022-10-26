import { api } from "../../../../src/config/config";

export const addedPokemonToCart = () => api.get(`/cart`);

export const deletePokemonFromCartApi = (id) => api.delete(`/cart/item/${id}`);

export const quantityPokemonInTheCart = (data) => api.patch(`/cart/item`, data);

export const doOrderApi = (data) => api.post(`/order`, data);
