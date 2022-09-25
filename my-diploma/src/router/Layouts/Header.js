import { Link } from "react-router-dom";
import ROUTE_NAMES from "../routeName";
import styles from "./index.module.css";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

const Header = () => {
  const array = Object.entries(ROUTE_NAMES).map(([routeName, routeValue]) => {
    return (
      <Link className={styles.link} key={routeName} to={routeValue}>
        {startCase(capitalize(routeName))}
      </Link>
    );
  });
  return (
    <div style={{ background: "yellowgreen", height: "4vh" }}>{array}</div>
  );
};

export default Header;
