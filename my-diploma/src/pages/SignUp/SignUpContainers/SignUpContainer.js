import styles from "./index.module.scss";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import ROUTE_NAMES from "../../../router/routeName";
import SignUpComponents from "../SignUpComponents/SignUpComponents";
import { signUpRequestApi } from "../api";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (info?.data.success) {
      setTimeout(() => {
        navigate(ROUTE_NAMES.sign_in);
      }, 5000);
    }
  }, [info, navigate]);

  const handleRequest = useCallback(async (values) => {
    try {
      setLoad(true);
      const request = await signUpRequestApi(values);
      setInfo(request);
    } catch (er) {
      setLoad(false);
      setError(er);
    } finally {
      setLoad(false);
    }
  }, []);

  const INITIAL_FORM_STATE = {
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phone: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name is too short")
      .max(20, "First name is too long"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name is too short")
      .max(20, "Last name is too long"),
    gender: Yup.string(),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .matches(/[0-9]/g, "Password must include at least one number"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter only a number")
      .required("Phone is required"),
  });

  return (
    <div className={styles.main}>
      <SignUpComponents
        info={info}
        load={load}
        error={error}
        handleRequest={handleRequest}
        INITIAL_FORM_STATE={INITIAL_FORM_STATE}
        FORM_VALIDATION={FORM_VALIDATION}
      />
    </div>
  );
};

export default SignUpContainer;
