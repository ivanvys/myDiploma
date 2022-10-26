import styles from "./index.module.scss";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCart } from "../../../customHooks/useCart";

import { detailPokemonInfoRequest, clearData } from "../../../AppReducer";
import { pokemonStatsWithIcons, inCartOrNot } from "../../../constants";
import Spinner from "../../../Components/Loading";
import PokemonDetailComponent from "../PokemonDetailComponent/PokemonDetailComponent";

import priceIcon from "../../../static/pokeStats/PRICE.png";

const PokemonDetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reduxStore, handleAddPokeToCart, handleReturnToProductsPage } =
    useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(detailPokemonInfoRequest(id));
  }, [id, dispatch]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearData());
  //   };
  // }, [dispatch]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      {reduxStore.isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <PokemonDetailComponent
          detailPokemonInfo={reduxStore.detailPokemonInfo}
          handleReturnToProductsPage={handleReturnToProductsPage}
          pokemonStatsWithIcons={pokemonStatsWithIcons(
            reduxStore.detailPokemonInfo
          )}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          priceIcon={priceIcon}
          inCartOrNot={inCartOrNot(
            reduxStore.cart,
            reduxStore.detailPokemonInfo
          )}
          handleAddPokeToCart={handleAddPokeToCart}
        />
      )}
    </div>
  );
};

export default PokemonDetailContainer;
