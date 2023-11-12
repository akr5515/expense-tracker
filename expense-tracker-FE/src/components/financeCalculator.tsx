import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {},
}));

const FinancialHealthScoreCalculator: React.FC = () => {
  const classes = useStyles();
  const [income, setIncome] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [savings, setSavings] = useState<string>("");
  const [debts, setDebts] = useState<string>("");
  const [financialHealthScore, setFinancialHealthScore] = useState<
    string | null
  >(null);

  const calculateFinancialHealthScore = () => {
    const incomeValue = parseInt(income);
    const expensesValue = parseInt(expenses);
    const savingsValue = parseInt(savings);
    const debtsValue = parseInt(debts);

    const score =
      ((incomeValue - expensesValue - debtsValue + savingsValue) /
        incomeValue) *
      100;

    setFinancialHealthScore(score.toFixed(2));
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Financial Health Score Calculator</Typography>
      <TextField
        className={classes.input}
        type="number"
        label="Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <TextField
        className={classes.input}
        type="number"
        label="Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
      />
      <TextField
        className={classes.input}
        type="number"
        label="Savings"
        value={savings}
        onChange={(e) => setSavings(e.target.value)}
      />
      <TextField
        className={classes.input}
        type="number"
        label="Debts"
        value={debts}
        onChange={(e) => setDebts(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateFinancialHealthScore}
      >
        Calculate Score
      </Button>
      {financialHealthScore !== null && (
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Financial Health Score: <strong>{financialHealthScore}</strong>
        </Typography>
      )}
    </Container>
  );
};

export default FinancialHealthScoreCalculator;
