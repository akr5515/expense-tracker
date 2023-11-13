import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, Button, Container, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface ExpenseFormData {
  label: string;
  amount: number;
}

const useStyles = makeStyles(() => ({
  container: {},
  paper: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

const AddExpense: React.FC = () => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<ExpenseFormData>();

  const onSubmit: SubmitHandler<ExpenseFormData> = (data) => {
    console.log(data);
    // Add your logic to handle the form submission
  };

  return (
    <Container className={classes.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "180px",
          width: "50%",
          marginTop: "10px",
        }}
      >
        <Controller
          name="label"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Label" variant="outlined" {...field} />
          )}
        />

        <Controller
          name="amount"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              type="number"
              label="Amount"
              variant="outlined"
              {...field}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "30%" }}
        >
          Add Expense
        </Button>
      </form>
    </Container>
  );
};

export default AddExpense;