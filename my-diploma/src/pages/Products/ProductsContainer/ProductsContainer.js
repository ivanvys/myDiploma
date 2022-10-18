import styles from "./index.module.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePagination } from "../../../customHooks/usePagination";
import { useCart } from "../../../customHooks/useCart";

import { productsRequest, whatPage } from "../../../AppReducer";

import ProductComponent from "../ProductsComponent/ProductsComponent";
import Pagination from "../../../Components/PaginationMUI";
import Spinner from "../../../Components/Loading";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { reduxStore, getInfo, handleAddPokeToCart, handlePokemonsDetail } =
    useCart();
  const [page, handlePageChange] = usePagination(reduxStore.page);

  useEffect(() => {
    dispatch(productsRequest(page));
    dispatch(whatPage(page));
  }, [page, dispatch]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Choose your favorite pokemon</p>
      <div className={styles.topPagination}>
        <Pagination
          currentPage={page}
          handlePageChange={handlePageChange}
          isDesabled={reduxStore.isLoading}
        />
      </div>
      <div className={styles.underWrapper}>
        {reduxStore.isLoading ? (
          <Spinner className={styles.spinner} />
        ) : (
          <ProductComponent
            products={reduxStore.products}
            handlePokemonsDetail={handlePokemonsDetail}
            handleAddPokeToCart={handleAddPokeToCart}
          />
        )}
      </div>
      <div className={styles.bottomPagination}>
        <Pagination
          currentPage={page}
          handlePageChange={handlePageChange}
          isDesabled={reduxStore.isLoading}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
