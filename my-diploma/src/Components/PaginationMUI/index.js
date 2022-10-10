import MaterailPagination from "@mui/material/Pagination";

const Pagination = ({ currentPage, handlePageChange, isDesabled }) => {
  return (
    <MaterailPagination
      count={20}
      page={currentPage}
      onChange={handlePageChange}
      size="small"
      color="secondary"
      variant="outlined"
      shape="rounded"
      disabled={isDesabled}
    />
  );
};

export default Pagination;
