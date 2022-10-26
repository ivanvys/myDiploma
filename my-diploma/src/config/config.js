import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants";
const BASE_URL = "https://poke-store-api.herokuapp.com";

const axiosConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(axiosConfig);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axiosConfig;
});
