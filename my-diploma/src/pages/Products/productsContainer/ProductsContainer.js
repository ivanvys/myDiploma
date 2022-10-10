import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pokemonSelector } from "../../../AppReducer/selector/selector";
import { productsRequest } from "../../../AppReducer";
import styles from "./index.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../../../Components/loading/Spinner";
import Pagination from "../../../Components/pagination/Pagination";
import { usePagination } from "../../../customHooks/usePagination";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeName";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, handlePageChange] = usePagination(1);

  const { isLoading, products } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(productsRequest(page));
  }, [page]);

  const handlePokemonsDetail = (id) => {
    navigate(`${ROUTE_NAMES.products}/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Choose your favorite pokemon</p>
      <div className={styles.underWrapper}>
        {isLoading ? (
          <Spinner className={styles.spinner} />
        ) : (
          products?.map((item) => {
            return (
              <div className={styles.pokeCard} key={item.id}>
                <PokemonCard
                  name={item.name}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  handlePokemonsDetail={handlePokemonsDetail}
                />
              </div>
            );
          })
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
