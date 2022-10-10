import styles from "./index.module.scss";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cartPageRequest,
  deletePokemonFromCartRequest,
} from "../../../AppReducer";
import { pokemonSelector } from "../../../AppReducer/selector/selector";
import ROUTE_NAMES from "../../../router/routeName";
import Spinner from "../../../Components/Loading";
import CartComponent from "../CartComponent/CartComponent";

const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, cart, error, cartDelete } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(cartPageRequest());
  }, []);

  const handlePokemonsDetail = (id) => {
    navigate(`${ROUTE_NAMES.products}/${id}`);
  };

  const handleDeletePokemonFromCart = useCallback((id) => {
    dispatch(deletePokemonFromCartRequest(id));
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <CartComponent
          cart={cart}
          handlePokemonsDetail={handlePokemonsDetail}
          handleDeletePokemonFromCart={handleDeletePokemonFromCart}
          cartDelete={cartDelete}
        />
      )}
    </div>
  );
};

export default CartContainer;
