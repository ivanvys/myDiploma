import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../router/routeName";
import { useCallback } from "react";
import styles from "./index.module.scss";
import Exit from "../../static/exit.png";

const LogOut = () => {
  const logOut = useCallback(() => {
    localStorage.clear();
    window.location.reload();
  });

  return (
    <div>
      <button onClick={logOut} className={styles.logout}>
        <img src={Exit} className={styles.exit} />
      </button>
    </div>
  );
};

export default LogOut;
