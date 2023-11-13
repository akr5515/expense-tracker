import { Box, Typography } from "@mui/material";
import React from "react";
import BarChart from "../components/barChart";
import AddExpense from "../components/expense/addExpense";

const ExpensesPage = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h4">Add Expense: </Typography>
        <AddExpense />
      </Box>

      <Box>
        <Typography variant="h4">Monthly Expense: </Typography>
        <BarChart />
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
