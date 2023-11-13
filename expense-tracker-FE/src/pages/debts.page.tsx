import { Box, Typography } from "@mui/material";
import React from "react";
import AddAsset from "../components/asset/addAsset";

const DebtsPage = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h4">Add Debt: </Typography>
        <AddAsset />
      </Box>

      <Box>
        <Typography variant="h4">Monthly Debt: </Typography>
      </Box>
    </Box>
  );
};

export default DebtsPage;
