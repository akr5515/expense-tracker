import { Box, Typography } from "@mui/material";
import React from "react";
import AddAsset from "../components/asset/addAsset";

const AssetsPage = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h4">Add Assets: </Typography>
        <AddAsset />
      </Box>

      <Box>
        <Typography variant="h4">Monthly Assets: </Typography>
      </Box>
    </Box>
  );
};

export default AssetsPage;
