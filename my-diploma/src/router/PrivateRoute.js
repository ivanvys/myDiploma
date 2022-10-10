import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTE_NAMES from "./routeName";
import { pokemonSelector } from "../AppReducer/selector/selector";

const PrivateRoute = () => {
  const { isAuth } = useSelector(pokemonSelector);
  return !isAuth ? <Navigate to={ROUTE_NAMES.sign_in} /> : <Outlet />;
};

export default PrivateRoute;
