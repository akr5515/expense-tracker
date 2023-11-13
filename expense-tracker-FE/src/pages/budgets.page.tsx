import { Box, Typography } from "@mui/material";
import React from "react";
import AddBudget from "../components/budget/addBudget";

const BudgetsPage = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h4">Add Budgets: </Typography>
        <AddBudget />
      </Box>

      <Box>
        <Typography variant="h4">Monthly Budgets: </Typography>
      </Box>
    </Box>
  );
};

export default BudgetsPage;
