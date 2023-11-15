import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserTransaction } from "../hooks/useHomePageHook";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    overflowY: "auto",
    maxHeight: "400px",
    minHeight: "250px",
  },
}));

interface TransactionItem {
  title: string;
  expense: string;
}

const TransactionHistory: React.FC = ({ transactionListData }) => {
  const classes = useStyles();

  const transactionType: { [key: string]: string } = {
    budget: "Budget",
    expense: "Expense",
    asset: "Asset",
    debt: "Debt",
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <List>
        {transactionListData.length === 0 && <Typography>No Data</Typography>}
        {transactionListData.length !== 0 &&
          transactionListData.map((item: UserTransaction) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.label}
                secondary={`${transactionType[item.type]}: ${item.amount}`}
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default TransactionHistory;
