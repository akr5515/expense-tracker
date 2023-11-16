import { Box, Typography } from "@mui/material";
import BarChart from "../components/barChart";
import { useBudgetHook } from "../hooks/useBudgetHook";
import CustomList from "../components/customList";
import InputFormWithLabel from "../components/inputFormWIthLabel";

const BudgetsPage = () => {
  const { monthlyBudgetData, monthlyBudgetList, handleAddBudget } =
    useBudgetHook();

  return (
    <Box>
      <Box>
        <Typography variant="h4">Current Month Budgets: </Typography>
        <BarChart monthlyBudgetData={monthlyBudgetData} type="Budget" />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography variant="h4">Add Budgets: </Typography>
          <InputFormWithLabel
            handleAddClick={handleAddBudget}
            btnText="Add Budget"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h4">Recent Budget List: </Typography>
          <CustomList data={monthlyBudgetList} />
        </Box>
      </Box>
    </Box>
  );
};

export default BudgetsPage;
