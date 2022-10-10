import { Link } from "react-router-dom";
import ROUTE_NAMES from "../routeName";
import styles from "./index.module.scss";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";
import Pokeball from "../../static/pokeball.png";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../AppReducer/selector/selector";
import LogOut from "../../Components/LogOut/LogOut";

const Header = () => {
  const { isAuth } = useSelector(pokemonSelector);
  return (
    <div className={styles.header}>
      <Link className={styles.link} to={ROUTE_NAMES.home}>
        <img src={Pokeball} className={styles.pokeball} />
      </Link>
      {isAuth && (
        <Link className={styles.link} to={ROUTE_NAMES.products}>
          {startCase(capitalize(ROUTE_NAMES.products))}
        </Link>
      )}
      {isAuth && (
        <Link className={styles.link} to={ROUTE_NAMES.products_details}>
          {startCase(capitalize("Pokemon Detail"))}
        </Link>
      )}
      {isAuth && (
        <div className={styles.logOut}>
          <LogOut />
        </div>
      )}
      {!isAuth && (
        <div className={styles.signInAndSignUp}>
          <Link className={styles.link} to={ROUTE_NAMES.sign_up}>
            {startCase(capitalize(ROUTE_NAMES.sign_up))}
          </Link>
          <Link className={styles.link} to={ROUTE_NAMES.sign_in}>
            {startCase(capitalize(ROUTE_NAMES.sign_in))}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header; //<---здесь настраивай хедер
