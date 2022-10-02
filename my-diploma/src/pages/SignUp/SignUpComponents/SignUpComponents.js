import styles from "./index.module.scss";
import { Formik, Form } from "formik";
import { signUpRequestApi } from "../api";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import TextFieldWrapper from "./FormsUI/Textfield";
import SelectForm from "./FormsUI/Select";

const SignUpComponents = ({
  setInfo,
  setLoad,
  setError,
  responseFromServer,
}) => {
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
    <div className={styles.mainWrapper}>
      <div> {responseFromServer()}</div>
      <div className={styles.formPlusTextBlock}>
        <h3 className={styles.text}>Sign Up</h3>
        <h3 className={styles.text}>Please enter your credentials below</h3>
        <div className={styles.formBlock}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={async (values) => {
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
            }}
          >
            <Form>
              <Grid container spacing={1} direction={"column"}>
                <Grid item xs={3}>
                  <TextFieldWrapper name="firstName" label="First name" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="lastName" label="Last name" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="email" label="Email" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="phone" label="Phone" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={3}>
                  <SelectForm
                    name="gender"
                    label="Gender"
                    options={{ male: "male", female: "female" }}
                  />
                </Grid>
              </Grid>
              <button
                // disabled={!formik.dirty}
                className={styles.buttonCreateAccount}
                type="submit"
              >
                Create an account
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponents;
