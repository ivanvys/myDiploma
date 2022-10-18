import styles from "./index.module.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../../customHooks/useCart";

import AboutUserComponents from "../AboutUserComponents/AboutUserComponents";
import Spinner from "../../../Components/Loading";

import { whatOrderWereMadeRequest } from "../../../AppReducer";

const AboutUser = () => {
  const dispatch = useDispatch();

  const { reduxStore, getInfo, handleReturnToProductsPage } = useCart();

  useEffect(() => {
    dispatch(whatOrderWereMadeRequest());
    getInfo();
  }, [dispatch, getInfo]);

  return (
    <div className={styles.wrapper}>
      {reduxStore.isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <AboutUserComponents
          handleReturnToProductsPage={handleReturnToProductsPage}
          userInfo={reduxStore.userInfo}
          whatOrderWereMade={reduxStore.whatOrderWereMade}
        />
      )}
    </div>
  );
};

export default AboutUser;
