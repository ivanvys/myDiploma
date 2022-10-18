import { useDispatch, useSelector } from "react-redux";
import { pokemonSelector } from "../AppReducer/selector/selector";
import { useCallback } from "react";
import {
  addPokemonToCartRequest,
  deletePokemonFromCartRequest,
  cartPageRequest,
  quantityPokemonInTheCartRequest,
  doOrderRequest,
} from "../AppReducer";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../router/routeName";

export const useCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxStore = useSelector(pokemonSelector);

  const getInfo = useCallback(() => {
    dispatch(cartPageRequest());
  }, [dispatch]);

  const handleAddPokeToCart = useCallback(
    (data) => {
      dispatch(addPokemonToCartRequest(data));
    },
    [dispatch]
  );

  const handleDeletePokemonFromCart = useCallback(
    (data) => {
      dispatch(deletePokemonFromCartRequest(data));
    },
    [dispatch]
  );

  const handleQuantityIncrease = useCallback(
    (id, quantity) => {
      const requestBody = {
        id: id,
        quantity: quantity + 1,
      };
      dispatch(quantityPokemonInTheCartRequest(requestBody));
    },
    [dispatch]
  );

  const handleQuantityDecrease = useCallback(
    (id, quantity) => {
      if (quantity > 0) {
        const requestBody = {
          id: id,
          quantity: quantity - 1,
        };
        dispatch(quantityPokemonInTheCartRequest(requestBody));
      }
    },
    [dispatch]
  );

  const handleDoOrder = useCallback(
    (data) => {
      dispatch(doOrderRequest(data));
    },
    [dispatch]
  );

  const handlePokemonsDetail = useCallback(
    (data) => {
      navigate(`${ROUTE_NAMES.products}/${data}`);
    },
    [dispatch, navigate]
  );

  const handleReturnToProductsPage = useCallback(() => {
    navigate(`${ROUTE_NAMES.products}?page=${reduxStore.page}`);
  }, [dispatch, navigate]);

  return {
    reduxStore,
    getInfo,
    handleAddPokeToCart,
    handleDeletePokemonFromCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
    handleDoOrder,
    handlePokemonsDetail,
    handleReturnToProductsPage,
  };
};
