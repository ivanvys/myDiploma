import styles from "./index.module.scss";
import DialogWindow from "./DialogMUI";

const PokeminDetailComponent = ({
  detailPokemonInfo,
  handleReturnToProductsPage,
  pokemonStatsWithIcons,
  open,
  handleClickOpen,
  handleClose,
  priceIcon,
  inCartOrNot,
  handleAddPokeToCart,
}) => {
  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <button onClick={handleReturnToProductsPage} className={styles.button}>
          Return
        </button>
        {inCartOrNot ? null : (
          <button
            className={styles.button}
            onClick={() =>
              handleAddPokeToCart({
                id: detailPokemonInfo.id,
                name: detailPokemonInfo.name,
                image: detailPokemonInfo.image,
                quantity: 1,
                price: detailPokemonInfo.price,
              })
            }
          >
            Add to cart
          </button>
        )}
      </div>
      <div className={styles.contentWrapper}>
        <div
          data-title={`Click on me!`}
          className={styles.imageWrapper}
          onClick={handleClickOpen}
        >
          <p className={styles.inscriptionClickOnMe}>Click on me!</p>
          <img
            src={detailPokemonInfo.image}
            className={styles.image}
            alt="pokeInfo"
          />
        </div>
        <DialogWindow
          detailPokemonInfo={detailPokemonInfo}
          pokemonStatsWithIcons={pokemonStatsWithIcons}
          priceIcon={priceIcon}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default PokeminDetailComponent;
