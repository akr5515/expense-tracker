import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDebtHook } from "../../hooks/useDebtHook";

interface DebtFormData {
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

const AddDebt: React.FC = () => {
  const classes = useStyles();
  const { handleAddDebt } = useDebtHook();
  const { control, handleSubmit } = useForm<DebtFormData>({
    defaultValues: {
      label: "",
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<DebtFormData> = (data) => {
    handleAddDebt(data);
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
          Add Debt
        </Button>
      </form>
    </Container>
  );
};

export default AddDebt;
