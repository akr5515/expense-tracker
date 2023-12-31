import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useUserHook from "../hooks/useUserHook";

interface RegistrationFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationPage: React.FC = () => {
  const { handleRegister } = useUserHook();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegistrationFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormInput> = (data) => {
    handleRegister(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", marginTop: 1 }}
        >
          <TextField
            {...register("firstName", { required: "First Name is required" })}
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            {...register("lastName", { required: "Last Name is required" })}
            label="Last Name"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have length at least 8",
              },
            })}
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Register
          </Button>
          <Typography sx={{ marginTop: "10px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;
