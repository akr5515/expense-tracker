import { Box, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Box>
        <Box>
          <Typography variant="h4">Your Balance: </Typography>
        </Box>
        <Box>
          <Box>Budget Cards</Box>
          <Box>Expense</Box>
          <Box>Debts</Box>
          <Box>assets</Box>
        </Box>
        <Box>
          <Typography variant="h5">Transaction History </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
