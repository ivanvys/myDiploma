import styles from "./index.module.scss";

import { useEffect } from "react";
import { useCart } from "../../../customHooks/useCart";

import Spinner from "../../../Components/Loading";
import CartComponent from "../CartComponent/CartComponent";

const CartContainer = () => {
  const {
    reduxStore,
    getInfo,
    handlePokemonsDetail,
    handleDeletePokemonFromCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
    handleReturnToProductsPage,
    handleDoOrder,
  } = useCart();

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div className={styles.wrapper}>
      {reduxStore.isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <CartComponent
          handleReturnToProductsPage={handleReturnToProductsPage}
          handlePokemonsDetail={handlePokemonsDetail}
          handleDeletePokemonFromCart={handleDeletePokemonFromCart}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
          handleDoOrder={handleDoOrder}
          cart={reduxStore.cart}
          userInfo={reduxStore.userInfo}
        />
      )}
    </div>
  );
};

export default CartContainer;
