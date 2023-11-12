import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    overflowY: "auto",
    maxHeight: "400px",
  },
}));

interface TransactionItem {
  title: string;
  expense: string;
}

const TransactionHistory: React.FC = () => {
  const classes = useStyles();

  const expenseData: TransactionItem[] = [
    { title: "Groceries", expense: "$100" },
    { title: "Rent", expense: "$1,000" },
    { title: "Utilities", expense: "$150" },
    { title: "Entertainment", expense: "$50" },
    { title: "Groceries", expense: "$100" },
    { title: "Rent", expense: "$1,000" },
    { title: "Utilities", expense: "$150" },
    { title: "Entertainment", expense: "$50" },
  ];

  return (
    <Paper elevation={3} className={classes.root}>
      <List>
        {expenseData.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.title}
              secondary={`Expense: ${item.expense}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionHistory;
