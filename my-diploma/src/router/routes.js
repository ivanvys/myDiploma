import { Route, Routes } from "react-router-dom";
import ROUTE_NAMES from "./routeName";
import SignUpContainer from "../pages/SignUp/SignUpContainers/SignUpContainer";
import SignInContainer from "../pages/SignIn/SignInContainers/SignInContainer";
import ProductsContainer from "../pages/Products/productsContainer/ProductsContainer";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/Home";
import PokemonDetailContainer from "../pages/PokemonDetail/PokemonDetalContainers/PokemonDetailContainer";

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
      </Route>
    </Routes>
  );
};

export default Router;
