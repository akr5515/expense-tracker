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

const FinancialOverview: React.FC = () => {
  const classes = useStyles();

  // Dummy data for the pie chart
  const data = {
    labels: ["Expenses", "Budget", "Assets", "Debts"],
    datasets: [
      {
        data: [300, 500, 200, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // const options = {
  //   maintainAspectRatio: false, // Set to false to allow fixed size
  //   responsive: false, // Set to false to disable responsiveness
  //   width: 600, // Set the width of the chart
  //   height: 600, // Set the height of the chart
  // };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Financial Overview</Typography>
        <Doughnut data={data} />
      </Paper>
    </Container>
  );
};

export default FinancialOverview;
