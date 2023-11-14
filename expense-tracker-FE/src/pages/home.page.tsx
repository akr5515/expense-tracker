import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../components/card";
import TransactionHistory from "../components/transactionHistory";
import useHomePageHook from "../hooks/useHomePageHook";
import FinancialOverviewPieChart from "../components/financialOverview";

const HomePage = () => {
  const { totalAmountData } = useHomePageHook();
  const cardData = [
    { title: "Total Budgets", amount: totalAmountData?.budgets },
    { title: "Expenses", amount: totalAmountData?.expenses },
    { title: "Assets", amount: totalAmountData?.assets },
    { title: "Debts", amount: totalAmountData?.debts },
  ];

  const chartData = [
    totalAmountData?.expenses !== undefined ? totalAmountData?.expenses : 500,
    totalAmountData?.budgets !== undefined ? totalAmountData?.budgets : 300,
    totalAmountData?.assets !== undefined ? totalAmountData?.assets : 200,
    totalAmountData?.debts !== undefined ? totalAmountData?.debts : 100,
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
              <CustomCard
                title={data.title}
                amount={data.amount ? data.amount : 0}
              />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h5">Transaction History </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <TransactionHistory />
            </Box>

            <Box sx={{ width: "450px" }}>
              <FinancialOverviewPieChart chartData={chartData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
