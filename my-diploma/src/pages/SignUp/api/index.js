import { api } from "../../../../src/config/config";

export const signUpRequestApi = (singUpInfo) =>
  api.post(`/auth/signup`, singUpInfo);
