import { api } from "../../../../src/config/config";

export const signInRequestApi = (singInInfo) =>
  api.post(`/auth/signIn`, singInInfo);
