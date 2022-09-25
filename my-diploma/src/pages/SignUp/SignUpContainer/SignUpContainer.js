import { useForm } from "../../../customHooks/useForm";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";
import styles from "./index.module.css";
import { signUpRequestApi } from "../api";
import lowerCase from "lodash/lowerCase";
import Spinner from "../../../loading/Spinner";

const delay = (del) => new Promise((resolve) => setTimeout(resolve, del));

const SignUpContainer = () => {
  const navigate = useNavigate();
  const { form, handleFormChange, handleFormReset } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phone: "",
  });

  const [info, setInfo] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      try {
        setLoad(true);
        event.preventDefault();
        await delay(1000); //<----чтобы посмотреть load
        const request = await signUpRequestApi(form);
        setInfo(request);
      } catch (e) {
        setLoad(false);
        setError(e);
      } finally {
        setLoad(false);
        handleFormReset();
      }
    },
    [form]
  );

  useEffect(() => {
    if (info?.data.success) {
      setTimeout(() => {
        navigate(ROUTE_NAMES.sign_in);
      }, 8000);
    }
  }, [info]);

  const responseFromServer = () => {
    if (load) {
      return (
        <div style={{ position: "absolute", top: "50vh", left: "10vw" }}>
          <Spinner />
        </div>
      );
    } else if (info?.data.success) {
      return (
        <div className={styles.errorResponse}>
          <p>
            {`${info?.data.message}!`} <br />
            You will be redirected to the sign in page.
          </p>
        </div>
      );
    } else if (Array.isArray(error?.response.data.message)) {
      return error?.response.data.message.map((item) => {
        return (
          <div key={item} className={styles.errorResponse}>
            {lowerCase(item)}
          </div>
        );
      });
    } else {
      return (
        <div className={styles.errorResponse}>
          {error?.response.data.message}
        </div>
      );
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.signUpMessage}> {responseFromServer()}</div>
        <h2 className={styles.text}>Sign Up</h2>
        <h2 className={styles.text}>Please enter your credentials below</h2>

        <form onSubmit={handleSubmit}>
          {Object.entries(form).map(([inputName, inputValue]) => {
            return (
              <input
                className={styles.input}
                key={inputName}
                name={inputName}
                value={inputValue}
                type={
                  inputName === "email"
                    ? "email"
                    : "text" && inputName === "password"
                    ? "password"
                    : "text"
                }
                onChange={handleFormChange}
                placeholder={`Please type your ${lowerCase(inputName)}`}
              ></input>
            );
          })}
          <button className={styles.buttonCreateAccount}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpContainer;
