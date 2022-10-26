import styles from "./index.module.scss";

import { useCart } from "../../customHooks/useCart";

const HomePage = () => {
  const { reduxStore, handleReturnToProductsPage } = useCart();
  return (
    <div>
      {reduxStore.isAuth ? (
        <div className={styles.homePageIsAuth}>
          <div className={styles.buttonWrapper}>
            {reduxStore.isAuth && (
              <button
                className={styles.button}
                onClick={handleReturnToProductsPage}
              >
                Back to shopping!
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.homePageNotIsAuth}></div>
      )}
    </div>
  );
};

export default HomePage;
