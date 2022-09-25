export const changePostfix = (initialAction, payload, newPostfix) => {
  const initialType = initialAction.type;

  const countToCut = initialType.length - 7;

  const newType = initialType.slice(0, countToCut) + newPostfix;

  return {
    type: newType,
    payload,
    someError: payload.response?.data.message,
  };
};
