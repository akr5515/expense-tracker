import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface FormData {
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

const InputFormWithLabel = ({
  handleAddClick,
  btnText,
}: {
  handleAddClick: (data: FormData) => void;
  btnText: string;
}) => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      label: "",
      amount: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleAddClick(data);
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
          width: "70%",
          marginTop: "10px",
        }}
      >
        <Controller
          name="label"
          control={control}
          rules={{ required: "Label is required" }}
          render={({ field }) => (
            <TextField
              label="Label"
              variant="outlined"
              // required
              {...field}
              error={!!errors.label}
              helperText={errors.label?.message}
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          rules={{ required: "Amount is required" }}
          render={({ field }) => (
            <TextField
              type="number"
              label="Amount"
              variant="outlined"
              // required
              {...field}
              error={!!errors.amount}
              helperText={errors.amount?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "130px", fontSize: "12px" }}
        >
          {btnText}
        </Button>
      </form>
    </Container>
  );
};

export default InputFormWithLabel;
