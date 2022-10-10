import styles from "./index.module.scss";

import PokemonCard from "../PokemonCard/PokemonCard";

const ProductComponent = ({
  products,
  handlePokemonsDetail,
  handleAddPokeToCart,
}) => {
  return (
    <div>
      <div className={styles.underWrapper}>
        {products?.map((item) => {
          return (
            <div className={styles.pokeCard} key={item.id}>
              <PokemonCard
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
                handlePokemonsDetail={handlePokemonsDetail}
                handleAddPokeToCart={handleAddPokeToCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductComponent;
