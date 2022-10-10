import styles from "./index.module.scss";

import PokemonCardInCart from "../PokemonCardInCart/PokemonCardInCart";

const CartComponent = ({
  cart,
  handlePokemonsDetail,
  handleDeletePokemonFromCart,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.orderText}>
        Total order value is: {cart.totalPrice}$
      </p>
      <div className={styles.underWrapper}>
        {cart?.itemsList?.map((item) => {
          return (
            <div key={item.id} className={styles.pokeCard}>
              <PokemonCardInCart
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
                handlePokemonsDetail={handlePokemonsDetail}
                handleDeletePokemonFromCart={handleDeletePokemonFromCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartComponent;
