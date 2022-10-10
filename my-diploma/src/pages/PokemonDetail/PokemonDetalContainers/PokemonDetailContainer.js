import styles from "./index.module.scss";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { pokemonSelector } from "../../../AppReducer/selector/selector";
import { detailPokemonInfoRequest } from "../../../AppReducer";
import Spinner from "../../../Components/Loading";
import ROUTE_NAMES from "../../../router/routeName";
import PokemonDetailComponent from "../PokemonDetailComponent/PokemonDetailComponent";

import hpIcon from "../../../static/pokeStats/HP.png";
import attackIcon from "../../../static/pokeStats/ATTACK.png";
import defenseIcon from "../../../static/pokeStats/DEFENSE.png";
import specialAttackIcon from "../../../static/pokeStats/SPECIAL_ATTACK.png";
import specialDefenseIcon from "../../../static/pokeStats/SPECIAL_DEFENSE.png";
import speedIcon from "../../../static/pokeStats/SPEED.png";
import priceIcon from "../../../static/pokeStats/PRICE.png";

const PokemonDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { detailPokemonInfo, isLoading, page } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(detailPokemonInfoRequest(id));
  }, [id]);

  const returnToProductsPage = () => {
    navigate(`${ROUTE_NAMES.products}?page=${page}`);
  };

  const statsItem = {
    hp: hpIcon,
    attack: attackIcon,
    defense: defenseIcon,
    "special-attack": specialAttackIcon,
    "special-defense": specialDefenseIcon,
    speed: speedIcon,
  };

  const pokemonStatsWithIcons = detailPokemonInfo?.stats?.map((element) => {
    return { ...element, icon: statsItem[element.title] };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <PokemonDetailComponent
          detailPokemonInfo={detailPokemonInfo}
          returnToProductsPage={returnToProductsPage}
          pokemonStatsWithIcons={pokemonStatsWithIcons}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          priceIcon={priceIcon}
        />
      )}
    </div>
  );
};

export default PokemonDetailContainer;
