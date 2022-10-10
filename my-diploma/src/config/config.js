import axios from "axios";
const BASE_URL = "http://localhost:3000";

const axiosConfig = {
  baseURL: BASE_URL,
};
export const api = axios.create(axiosConfig);
