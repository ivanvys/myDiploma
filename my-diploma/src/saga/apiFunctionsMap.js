import { signInRequest } from "../AppReducer";
import { productsRequest } from "../AppReducer";
import { detailPokemonInfoRequest } from "../AppReducer";
import { cartPageRequest } from "../AppReducer";
import { deletePokemonFromCartRequest } from "../AppReducer";

import { signInRequestApi } from "../pages/SignIn/api/index";
import { productsPageRequest } from "../pages/Products/api";
import { pokemonDetailApi } from "../pages/PokemonDetail/api";
import { addedPokemonToCart } from "../pages/Cart/api";
import { deletePokemonFromCartApi } from "../pages/Cart/api";

export const apiFunctionsMap = (action) => {
  const apiMap = {
    [signInRequest.type]: signInRequestApi,
    [productsRequest.type]: productsPageRequest,
    [detailPokemonInfoRequest.type]: pokemonDetailApi,
    [cartPageRequest]: addedPokemonToCart,
    [deletePokemonFromCartRequest]: deletePokemonFromCartApi,
  };

  return apiMap[action.type];
};
