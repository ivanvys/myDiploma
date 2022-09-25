import { Route, Routes } from "react-router-dom";
import ROUTE_NAMES from "./routeName";
import SignUpContainer from "../pages/SignUp/SignUpContainer/SignUpContainer";
import SignInContainer from "../pages/SignIn/SignInContainer/SignInContainer";
import ProductsContainer from "../pages/Products/productsContainer/ProductsContainer";
import PrivateRoute from "./PrivateRoute";
import { pokemonSelector } from "../pages/SignIn/selector/selector";
import { useSelector } from "react-redux";
const Router = () => {
  const { isAuth } = useSelector(pokemonSelector);

  return (
    <Routes>
      <Route path={ROUTE_NAMES.sign_up} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.sign_in} element={<SignInContainer />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_NAMES.products} element={<ProductsContainer />} />
      </Route>
    </Routes>
  );
};

export default Router;
