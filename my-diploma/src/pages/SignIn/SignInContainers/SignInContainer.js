import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../../AppReducer/selector/selector";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";
import styles from "./index.module.scss";
import SingInComponents from "../SignInComponents/SingInComponents";

const SignInContainer = () => {
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector(pokemonSelector);

  const handleRedirectToSignUp = useCallback(() => {
    navigate(ROUTE_NAMES.sign_up);
  }, []);

  useEffect(() => {
    isAuth && navigate(ROUTE_NAMES.products);
  }, [isAuth]);

  return (
    <div className={styles.main}>
      <SingInComponents
        isLoading={isLoading}
        error={error}
        handleRedirectToSignUp={handleRedirectToSignUp}
      />
    </div>
  );
};

export default SignInContainer;
