import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CountUp from "react-countup";

interface CardProps {
  title: string;
  amount: number;
}

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: "16px",
  },
  title: {
    fontSize: 14,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "8px",
  },
});

const CustomCard: React.FC<CardProps> = ({ title, amount }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" component="div" className={classes.amount}>
          $<CountUp end={amount} duration={2} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
