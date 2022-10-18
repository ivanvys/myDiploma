import { signInRequest } from "../AppReducer";
import { productsRequest } from "../AppReducer";
import { detailPokemonInfoRequest } from "../AppReducer";
import { cartPageRequest } from "../AppReducer";
import { deletePokemonFromCartRequest } from "../AppReducer";
import { addPokemonToCartRequest } from "../AppReducer";
import { quantityPokemonInTheCartRequest } from "../AppReducer";
import { doOrderRequest } from "../AppReducer";
import { whatOrderWereMadeRequest } from "../AppReducer";

import { signInRequestApi } from "../pages/SignIn/api/index";
import { productsPageRequest } from "../pages/Products/api";
import { pokemonDetailApi } from "../pages/PokemonDetail/api";
import { addedPokemonToCart } from "../pages/Cart/api";
import { deletePokemonFromCartApi } from "../pages/Cart/api";
import { addPokemonToCart } from "../pages/Products/api/index";
import { quantityPokemonInTheCart } from "../pages/Cart/api";
import { doOrderApi } from "../pages/Cart/api";
import { letMeSeeOrdersApi } from "../pages/AboutUser/api";

export const apiFunctionsMap = (action) => {
  const apiMap = {
    [signInRequest]: signInRequestApi,
    [productsRequest]: productsPageRequest,
    [detailPokemonInfoRequest]: pokemonDetailApi,
    [cartPageRequest]: addedPokemonToCart,
    [deletePokemonFromCartRequest]: deletePokemonFromCartApi,
    [addPokemonToCartRequest]: addPokemonToCart,
    [quantityPokemonInTheCartRequest]: quantityPokemonInTheCart,
    [doOrderRequest]: doOrderApi,
    [whatOrderWereMadeRequest]: letMeSeeOrdersApi,
  };

  return apiMap[action.type];
};
