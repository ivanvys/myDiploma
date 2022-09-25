import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";
const ProductsContainer = () => {
  const navigate = useNavigate();
  const logOut = useCallback(() => {
    localStorage.clear();
    navigate(ROUTE_NAMES.sign_in);
    window.location.reload();
  });
  return (
    <div>
      <h1>ПОКА ЗАГЛУШКА</h1>
      <button onClick={logOut}>Разлогиниться</button>
    </div>
  );
};

export default ProductsContainer;
