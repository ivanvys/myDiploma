import { api } from "../../../../src/config/config";

export const addedPokemonToCart = () => api.get(`/cart`);

export const deletePokemonFromCartApi = (id) => api.delete(`/cart/item/${id}`);
