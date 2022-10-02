export const isApiCall = (action) => {
  return action.type.endsWith("Request");
};
