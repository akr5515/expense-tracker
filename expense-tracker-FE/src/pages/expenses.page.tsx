import { Box, Typography } from "@mui/material";
import React from "react";

const ExpensesPage = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h4">Monthly Expense: </Typography>
      </Box>
      <Box>
        <Typography variant="h4">Yearly Expense: </Typography>
      </Box>

      <Box>
        <Typography variant="h5">Expense History </Typography>
      </Box>
    </Box>
  );
};

export default ExpensesPage;
