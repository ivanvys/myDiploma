import styles from "./index.module.scss";
import DialogWindow from "./DialogMUI";

const PokeminDetailComponent = ({
  detailPokemonInfo,
  returnToProductsPage,
  pokemonStatsWithIcons,
  open,
  handleClickOpen,
  handleClose,
  priceIcon,
}) => {
  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <button onClick={returnToProductsPage} className={styles.button}>
          Return to products
        </button>
        <button className={styles.button}>Add to cart</button>
      </div>
      <div className={styles.contentWrapper}>
        <div
          data-title={`Click on me!`}
          className={styles.imageWrapper}
          onClick={handleClickOpen}
        >
          <img src={detailPokemonInfo.image} className={styles.image} />
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
