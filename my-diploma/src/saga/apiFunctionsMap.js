import { signInRequest } from "../AppReducer";
import { productsRequest } from "../AppReducer";
import { detailPokemonInfoRequest } from "../AppReducer";

import { signInRequestApi } from "../pages/SignIn/api/index";
import { productsPageRequest } from "../pages/Products/api";
import { pokemonDetailApi } from "../pages/PokemonDetail/api";

export const apiFunctionsMap = (action) => {
  const apiMap = {
    [signInRequest.type]: signInRequestApi,
    [productsRequest.type]: productsPageRequest,
    [detailPokemonInfoRequest.type]: pokemonDetailApi,
  };

  return apiMap[action.type];
};
