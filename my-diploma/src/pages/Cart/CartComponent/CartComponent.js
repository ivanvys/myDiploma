import styles from "./index.module.scss";

import PokemonCardInCart from "../PokemonCardInCart/PokemonCardInCart";
import PokemonIsCrying from "../../../static/cryingPokemon.png";

import { memo } from "react";

const CartComponent = ({
  cart,
  handleReturnToProductsPage,
  handlePokemonsDetail,
  handleDeletePokemonFromCart,
  handleQuantityIncrease,
  handleQuantityDecrease,
  handleDoOrder,
  userInfo,
}) => {
  return (
    <div>
      <button onClick={handleReturnToProductsPage} className={styles.button}>
        Back to shopping!
      </button>
      {cart?.madeOrder ? (
        <p className={styles.orderText}>
          Thank you for your order!
          <br /> You can see your orders in your profile
        </p>
      ) : cart?.itemsList?.length === 0 ? (
        <div>
          <p className={styles.orderText}>Your cart is empty</p>
          <img
            src={PokemonIsCrying}
            className={styles.cryingPoke}
            alt="PokemonIsCrying"
          />
        </div>
      ) : (
        <p className={styles.orderText}>
          Total order value is: {cart?.totalPrice}$
        </p>
      )}
      <div className={styles.underWrapper}>
        {cart?.itemsList?.map((item) => {
          return (
            <div key={item.id} className={styles.pokeCard}>
              <PokemonCardInCart
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                handlePokemonsDetail={handlePokemonsDetail}
                handleDeletePokemonFromCart={handleDeletePokemonFromCart}
                handleQuantityIncrease={handleQuantityIncrease}
                handleQuantityDecrease={handleQuantityDecrease}
              />
            </div>
          );
        })}
      </div>
      {cart?.itemsList?.length > 0 && (
        <button
          className={styles.button}
          onClick={() =>
            handleDoOrder({
              customerId: userInfo._id,
              totalPrice: cart?.totalPrice,
              itemsList: cart?.itemsList,
            })
          }
        >
          Make an order
        </button>
      )}
    </div>
  );
};

export default memo(CartComponent);
