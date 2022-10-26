import MaterailPagination from "@mui/material/Pagination";

const Pagination = ({ currentPage, handlePageChange, isDesabled }) => {
  return (
    <MaterailPagination
      count={20}
      page={currentPage}
      onChange={handlePageChange}
      size="large"
      color="primary"
      variant="outlined"
      shape="rounded"
      disabled={isDesabled}
      hideNextButton={true}
      hidePrevButton={true}
      sx={{
        backdropFilter: "blur(8px)",
      }}
    />
  );
};

export default Pagination;
