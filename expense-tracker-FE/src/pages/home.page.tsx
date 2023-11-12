import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCard from "../components/card";
import FinancialHealthScoreCalculator from "../components/financeCalculator";
import TransactionHistory from "../components/transactionHistory";

const HomePage = () => {
  const cardData = [
    { title: "Total Budgets", amount: "$1,000,000" },
    { title: "Expenses", amount: "$500,000" },
    { title: "Assets", amount: "$500,000" },
    { title: "Debts", amount: "$1,000,000" },
  ];
  const expenseData: ExpenseItem[] = [
    { title: "Groceries", expense: "$100" },
    { title: "Rent", expense: "$1,000" },
    { title: "Utilities", expense: "$150" },
    { title: "Entertainment", expense: "$50" },
  ];
  return (
    <div>
      <Box>
        <Box>
          <Typography variant="h4">Your Balance: </Typography>
        </Box>
        {/* <FinancialHealthScoreCalculator /> */}
        <Grid container spacing={3}>
          {cardData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <CustomCard title={data.title} amount={data.amount} />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h5">Transaction History </Typography>
          <TransactionHistory />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
