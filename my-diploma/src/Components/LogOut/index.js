import styles from "./index.module.scss";
import Exit from "../../static/exit.png";

const LogOut = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <button onClick={logOut} className={styles.logout}>
        <img src={Exit} className={styles.exit} />
      </button>
    </div>
  );
};

export default LogOut;
