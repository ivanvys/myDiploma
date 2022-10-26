import { api } from "../../../../src/config/config";

export const pokemonDetailApi = (id) => api.get(`/products/${id}`);
