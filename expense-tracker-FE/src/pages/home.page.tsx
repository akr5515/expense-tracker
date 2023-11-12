import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../components/card.component";

const HomePage = () => {
  const cardData = [
    { title: "Total Budgets", amount: "$1,000,000" },
    { title: "Expenses", amount: "$500,000" },
    { title: "Assets", amount: "$500,000" },
    { title: "Debts", amount: "$1,000,000" },
  ];

  return (
    <div>
      <Box>
        <Box>
          <Typography variant="h4">Your Balance: </Typography>
        </Box>
        <Grid container spacing={3}>
          {cardData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <CustomCard title={data.title} amount={data.amount} />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h5">Transaction History </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
