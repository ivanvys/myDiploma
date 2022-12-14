import { Route, Routes } from "react-router-dom";
import ROUTE_NAMES from "./routeName";
import SignUpContainer from "../pages/SignUp/SignUpContainers/SignUpContainer";
import SignInContainer from "../pages/SignIn/SignInContainers/SignInContainer";
import ProductsContainer from "../pages/Products/ProductsContainer/ProductsContainer.js";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/Home/Home.js";
import PokemonDetailContainer from "../pages/PokemonDetail/PokemonDetalContainers/PokemonDetailContainer";
import CartContainer from "../pages/Cart/CartContainer/CartContainer";
import AboutUserContainer from "../pages/AboutUser/AboutUserContainer/AboutUserContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.sign_in} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.sign_up} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.home} element={<HomePage />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_NAMES.products} element={<ProductsContainer />} />
        <Route
          path={ROUTE_NAMES.products_details}
          element={<PokemonDetailContainer />}
        />
        <Route path={ROUTE_NAMES.cart} element={<CartContainer />} />
        <Route path={ROUTE_NAMES.user} element={<AboutUserContainer />} />
      </Route>
    </Routes>
  );
};

export default Router;
