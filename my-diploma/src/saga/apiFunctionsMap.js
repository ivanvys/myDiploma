import { signInRequest } from "../AppReducer";
import { signInRequestApi } from "../pages/SignIn/api/index";

export const apiFunctionsMap = (action) => {
  const apiMap = {
    [signInRequest.type]: signInRequestApi,
  };

  return apiMap[action.type];
};
