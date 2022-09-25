import { useForm } from "../../../customHooks/useForm";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../../AppReducer";
import { pokemonSelector } from "../selector/selector";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";
import styles from "./index.module.css";

const SignInContainer = () => {
  const navigate = useNavigate();
  const { isLoading, signInError, isAuth } = useSelector(pokemonSelector);
  const dispatch = useDispatch();
  const { form, handleFormChange, handleFormReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      dispatch(signInRequest(form));
      handleFormReset();
    },
    [form]
  );

  const handleRedirectToSignUp = useCallback(() => {
    navigate(ROUTE_NAMES.sign_up);
  }, []);

  useEffect(() => {
    isAuth && navigate(ROUTE_NAMES.products);
  }, [isAuth]);

  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        {Array.isArray(signInError)
          ? signInError?.map((item, index) => {
              return (
                <div key={index} className={styles.errorResponse}>
                  {item}
                </div>
              );
            })
          : signInError}
        <h2 className={styles.text}>Sign In</h2>
        <h2 className={styles.text}>Please enter your credentials below</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(form).map(([inputName, inputValue]) => {
            return (
              <input
                className={styles.input}
                key={inputName}
                name={inputName}
                value={inputValue}
                type={inputName === "email" ? "email" : "password"}
                onChange={handleFormChange}
                placeholder={`Please type ${inputName}`}
              ></input>
            );
          })}
          <button className={styles.button}>Sign in</button>
        </form>
        <button onClick={handleRedirectToSignUp} className={styles.button}>
          Don't have an account?
        </button>
      </div>
    </div>
  );
};

export default SignInContainer;
