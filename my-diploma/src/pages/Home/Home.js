import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../AppReducer/selector/selector";
import ROUTE_NAMES from "../../router/routeName";

const HomePage = () => {
  const navigate = useNavigate();

  const { isAuth, page } = useSelector(pokemonSelector);

  const returnToProductsPage = () => {
    navigate(`${ROUTE_NAMES.products}?page=${page}`);
  };

  return (
    <div className={styles.homePage}>
      {isAuth && (
        <button className={styles.returnButton} onClick={returnToProductsPage}>
          Back to shopping!
        </button>
      )}
    </div>
  );
};

export default HomePage;
