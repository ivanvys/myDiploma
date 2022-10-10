import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";
import styles from "./index.module.scss";
import SignUpComponents from "../SignUpComponents/SignUpComponents";
import Spinner from "../../../Components/loading/Spinner";

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
  }, [info]);

  const responseFromServer = () => {
    if (load) {
      return <Spinner className={styles.spinner} />;
    } else if (info?.data.success) {
      return (
        <div className={styles.errorResponse}>
          <p>
            {`${info?.data.message}!`} <br />
            You will be redirected to the sign in page.
          </p>
        </div>
      );
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
      <SignUpComponents
        setInfo={setInfo}
        setLoad={setLoad}
        setError={setError}
        responseFromServer={responseFromServer}
      />
    </div>
  );
};

export default SignUpContainer;
