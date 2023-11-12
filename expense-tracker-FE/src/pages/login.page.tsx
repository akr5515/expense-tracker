import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/userReducers";
import { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

interface LoginFormInput {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);

    dispatch(login());
    localStorage.setItem("token", "login");
    navigate("/");
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
          Login
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", marginTop: 1 }}
        >
          <TextField
            {...register("username", { required: "Username is required" })}
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            {...register("password", { required: "Password is required" })}
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
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
