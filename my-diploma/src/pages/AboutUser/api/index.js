import { api } from "../../../config/config";

export const letMeSeeOrdersApi = () => api.get(`/order`);
