import styles from "./index.module.scss";

import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePagination } from "../../../customHooks/usePagination";
import { useNavigate } from "react-router-dom";

import { pokemonSelector } from "../../../AppReducer/selector/selector";
import { productsRequest, whatPage } from "../../../AppReducer";
import { addPokemonToCart } from "../api";

import ROUTE_NAMES from "../../../router/routeName";

import ProductComponent from "../ProductsComponent/ProductsComponent";
import Pagination from "../../../Components/PaginationMUI";
import Spinner from "../../../Components/Loading";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, products } = useSelector(pokemonSelector);
  const [page, handlePageChange] = usePagination(1);

  useEffect(() => {
    dispatch(productsRequest(page));
    dispatch(whatPage(page));
  }, [page]);

  const handlePokemonsDetail = (id) => {
    navigate(`${ROUTE_NAMES.products}/${id}`);
  };

  const handleAddPokeToCart = useCallback((data) => {
    try {
      addPokemonToCart(data);
    } catch (LoadingError) {
      console.log(LoadingError);
    }
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Choose your favorite pokemon</p>
      <div className={styles.underWrapper}>
        {isLoading ? (
          <Spinner className={styles.spinner} />
        ) : (
          <ProductComponent
            products={products}
            handlePokemonsDetail={handlePokemonsDetail}
            handleAddPokeToCart={handleAddPokeToCart}
          />
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          currentPage={page}
          handlePageChange={handlePageChange}
          isDesabled={isLoading}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
