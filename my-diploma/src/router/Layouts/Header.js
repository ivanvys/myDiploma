import { memo } from "react";
import { Link } from "react-router-dom";
import ROUTE_NAMES from "../routeName";
import styles from "./index.module.scss";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";
import Pokeball from "../../static/pokeball.png";
import Cart from "../../static/cart.png";
import User from "../../static/user.png";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../AppReducer/selector/selector";
import LogOut from "../../Components/LogOut";

const Header = () => {
  const { isAuth, cart } = useSelector(pokemonSelector);

  return (
    <div className={styles.header}>
      <Link className={styles.link} to={ROUTE_NAMES.home}>
        <img src={Pokeball} className={styles.pokeball} alt="Pokeball" />
      </Link>
      <div className={styles.logOutCartUserPages}>
        {isAuth && (
          <Link to={ROUTE_NAMES.user}>
            <img src={User} className={styles.cart} alt="User" />
          </Link>
        )}
        {isAuth && (
          <Link to={ROUTE_NAMES.cart}>
            <img src={Cart} className={styles.cart} alt="Cart" />
            <div className={styles.theNumderOfOrders}>{cart?.quantity}</div>
          </Link>
        )}
        {isAuth && (
          <div className={styles.logOut}>
            <LogOut />
          </div>
        )}
      </div>

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

export default memo(Header); //<---здесь настраивай хедер
