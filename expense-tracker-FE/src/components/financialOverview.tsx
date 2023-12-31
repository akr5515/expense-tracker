import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const useStyles = makeStyles(() => ({
  container: {},
  paper: {
    textAlign: "center",
  },
}));

const FinancialOverviewPieChart: React.FC = ({ chartData }) => {
  const classes = useStyles();

  // Dummy data for the pie chart
  const data = {
    labels: ["Expenses", "Budget", "Assets", "Debts"],
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#FF6384", "#36A2EB", "#4CAF50", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4CAF50", "#FFCE56"],
      },
    ],
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Financial Overview</Typography>
        <Doughnut data={data} />
      </Paper>
    </Container>
  );
};

export default FinancialOverviewPieChart;
