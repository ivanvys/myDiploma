import styles from "./index.module.scss";

import { Formik, Form } from "formik";
import { Grid } from "@mui/material";

import TextFieldWrapper from "./FormsUI/Textfield";
import SelectForm from "./FormsUI/Select";
import Spinner from "../../../Components/Loading";

const SignUpComponents = ({
  info,
  load,
  error,
  handleRequest,
  FORM_VALIDATION,
  INITIAL_FORM_STATE,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div>
        {load ? (
          <Spinner className={styles.spinner} />
        ) : info?.data.success ? (
          <div className={styles.errorResponse}>
            <p>
              {`${info?.data.message}!`} <br />
              You will be redirected to the sign in page.
            </p>
          </div>
        ) : (
          <div className={styles.errorResponse}>
            {error?.response.data.message}
          </div>
        )}
      </div>
      <div className={styles.formPlusTextBlock}>
        <h3 className={styles.text}>Sign Up</h3>
        <h3 className={styles.text}>Please enter your credentials below</h3>
        <div className={styles.formBlock}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => handleRequest(values)}
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
              <button className={styles.buttonCreateAccount} type="submit">
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
