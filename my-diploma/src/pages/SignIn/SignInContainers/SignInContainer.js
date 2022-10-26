import styles from "./index.module.scss";

import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearData } from "../../../AppReducer";

import { pokemonSelector } from "../../../AppReducer/selector/selector";

import ROUTE_NAMES from "../../../router/routeName";

import SingInComponents from "../SignInComponents/SingInComponents";

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isAuth } = useSelector(pokemonSelector);

  const handleRedirectToSignUp = useCallback(() => {
    navigate(ROUTE_NAMES.sign_up);
  }, []);

  useEffect(() => {
    isAuth && navigate(ROUTE_NAMES.products);
  }, [isAuth]);

  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <SingInComponents
        isLoading={isLoading}
        error={error}
        handleRedirectToSignUp={handleRedirectToSignUp}
      />
    </div>
  );
};

export default SignInContainer;
