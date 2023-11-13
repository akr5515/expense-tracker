import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const useStyles = makeStyles(() => ({
  container: {},
  paper: {
    textAlign: "center",
  },
  chartContainer: {
    height: 300,
  },
}));

const BarChart: React.FC = () => {
  const classes = useStyles();

  // Dummy data for the bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Expenses",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 1)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Monthly Expenses</Typography>
        <div className={classes.chartContainer}>
          <Bar data={data} options={options} />
        </div>
      </Paper>
    </Container>
  );
};

export default BarChart;
