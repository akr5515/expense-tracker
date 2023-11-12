import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const NotFoundPage: React.FC = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        The page you are looking for Not Found.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
