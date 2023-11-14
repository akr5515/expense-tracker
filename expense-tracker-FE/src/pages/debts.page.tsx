import { Box, Typography } from "@mui/material";
import React from "react";
import AddDebt from "../components/debt/addDebt";

const DebtsPage = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h4">Add Debt: </Typography>
        <AddDebt />
      </Box>

      <Box>
        <Typography variant="h4">Monthly Debt: </Typography>
      </Box>
    </Box>
  );
};

export default DebtsPage;
