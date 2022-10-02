import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = useCallback((_, page) => {
    setSearchParams({ page });
  }, []);

  return [Number(searchParams.get("page")), handlePageChange];
};
