import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useBudgetHook } from "../../hooks/useBudgetHook";

interface BudgetFormData {
  label: string;
  amount: string;
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

const AddBudget: React.FC = () => {
  const classes = useStyles();
  const { handleAddBudget } = useBudgetHook();
  const { control, handleSubmit } = useForm<BudgetFormData>({
    defaultValues: {
      label: "",
      amount: "",
    },
  });
  const onSubmit: SubmitHandler<BudgetFormData> = (data) => {
    console.log(data);
    handleAddBudget(data);
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
          render={({ field }) => (
            <TextField label="Label" variant="outlined" {...field} />
          )}
        />

        <Controller
          name="amount"
          control={control}
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
          sx={{ width: "130px", fontSize: "12px" }}
        >
          Add Budget
        </Button>
      </form>
    </Container>
  );
};

export default AddBudget;
