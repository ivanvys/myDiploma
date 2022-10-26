import styles from "./index.module.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";

import { useDispatch } from "react-redux";
import { signInRequest } from "../../../AppReducer";

import TextFieldWrapper from "../../SignUp/SignUpComponents/FormsUI/Textfield/index";
import Spinner from "../../../Components/Loading";

import Ash from "../../../static/ash.png";

const SingInComponents = ({ isLoading, error, handleRedirectToSignUp }) => {
  const dispatch = useDispatch();

  const INITIAL_FORM_STATE = {
    email: "",
    password: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .matches(/[0-9]/g, "Password must include at least one number"),
  });

  return (
    <div className={styles.mainWrapper}>
      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <div className={styles.errorResponse}>{error} </div>
      )}
      <h2 className={styles.text}>Sign In</h2>
      <h2 className={styles.text}>Please enter your credentials below</h2>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          dispatch(signInRequest(values));
        }}
      >
        <Form>
          <Grid container spacing={1} direction={"column"}>
            <Grid item xs={3}>
              <TextFieldWrapper name="email" label="Email" />
            </Grid>
            <Grid item xs={3}>
              <TextFieldWrapper
                name="password"
                label="Password"
                type="password"
              />
            </Grid>
          </Grid>
          <button className={styles.button} type="submit">
            Sing in
          </button>
        </Form>
      </Formik>
      <button onClick={handleRedirectToSignUp} className={styles.button}>
        Don't have an account?
      </button>
      <img src={Ash} className={styles.Ash} />
    </div>
  );
};

export default SingInComponents;
