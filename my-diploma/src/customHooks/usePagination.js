import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = useCallback((_, page) => {
    setSearchParams({ page });
  }, []);

  useEffect(() => {
    handlePageChange(null, data);
  }, []);

  return [Number(searchParams.get("page")), handlePageChange];
};
