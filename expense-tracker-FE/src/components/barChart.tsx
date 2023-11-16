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
import { Container, Typography, Paper, Box } from "@mui/material";
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

const BarChart = ({
  monthlyBudgetData,
  type,
}: {
  monthlyBudgetData: { dayList: number[]; sumList: number[] };
  type: string;
}) => {
  const classes = useStyles();
  console.log("The type ", type);
  const colorFamily: {
    [key: string]: { backgroundColor: string; hoverColor: string };
  } = {
    budget: {
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      hoverColor: "rgba(54, 162, 235, 1)",
    },
    expense: {
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      hoverColor: "rgba(255, 99, 132, 1)",
    },
    asset: {
      backgroundColor: "rgba(76, 175, 80, 0.5)",
      hoverColor: "rgba(76, 175, 80, 1)",
    },
    debt: {
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      hoverColor: "rgba(255, 206, 86, 1)",
    },
  };

  const data = {
    labels: monthlyBudgetData.dayList
      ? monthlyBudgetData.dayList
      : ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: `Monthly ${type}`,
        backgroundColor: colorFamily[type.toLowerCase()].backgroundColor,
        borderColor: colorFamily[type.toLowerCase()].hoverColor,
        borderWidth: 1,
        hoverBackgroundColor: colorFamily[type.toLowerCase()].hoverColor,
        hoverBorderColor: colorFamily[type.toLowerCase()].hoverColor,
        data: monthlyBudgetData.sumList
          ? monthlyBudgetData.sumList
          : [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false, // Prevents auto-skipping of labels
          maxRotation: 90, // Rotates labels if needed (in degrees)
          minRotation: 0, // Sets minimum rotation for labels
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.paper}>
        <Typography variant="h5" sx={{ width: "800px" }}>
          Monthly {type}
        </Typography>
        <Box className={classes.chartContainer} sx={{ height: "500px" }}>
          <Bar data={data} options={options} />
        </Box>
      </Box>
    </Container>
  );
};

export default BarChart;
