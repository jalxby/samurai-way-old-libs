import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const MyPagination: React.FC = () => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    console.log(page);
  };

  return (
    <>
      <Pagination count={10} onChange={handlePageChange} color="primary" />
    </>
  );
};
