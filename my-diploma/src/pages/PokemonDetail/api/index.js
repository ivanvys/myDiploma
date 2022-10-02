import { api } from "../../../../src/config/config";
import { LOCAL_STORAGE_KEYS } from "../../../constants";

export const pokemonDetailApi = (id) => api.get(`/products/${id}`);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axiosConfig;
});