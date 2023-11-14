import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAssetHook } from "../../hooks/useAssetHook";

interface AssetFormData {
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

const AddAsset: React.FC = () => {
  const classes = useStyles();
  const { handleAddAsset } = useAssetHook();
  const { control, handleSubmit } = useForm<AssetFormData>({
    defaultValues: {
      label: "",
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<AssetFormData> = (data) => {
    console.log(data);
    // Add your logic to handle the form submission
    handleAddAsset(data);
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
          Add Asset
        </Button>
      </form>
    </Container>
  );
};

export default AddAsset;
