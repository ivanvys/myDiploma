import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../../AppReducer/selector/selector";
import { detailPokemonInfoRequest } from "../../../AppReducer";
import Spinner from "../../../Components/loading/Spinner";
import styles from "./index.module.scss";

const PokemonDetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailPokemonInfo, isLoading, error } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(detailPokemonInfoRequest(id));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <div>
          <div>
            <h1>{`Hello I am ${detailPokemonInfo.name}`}</h1>
            <img src={detailPokemonInfo.image} />
            <h1>My stats:</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetailContainer;
