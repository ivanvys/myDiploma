import styles from "./index.module.scss";

import { useCart } from "../../customHooks/useCart";

const HomePage = () => {
  const { reduxStore, handleReturnToProductsPage } = useCart();
  return (
    <div className={styles.homePage}>
      {reduxStore.isAuth && (
        <button className={styles.button} onClick={handleReturnToProductsPage}>
          Back to shopping!
        </button>
      )}
    </div>
  );
};

export default HomePage;
