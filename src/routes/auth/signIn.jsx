import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { TH_signin } from "../../store/user/thunk";
import { useDispatch, useSelector } from "react-redux";
import { getUserLoading } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(getUserLoading);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      TH_signin({
        username: data.get("email"),
        password: data.get("password"),
      })
    );
  };
  const handelNavigate = () => {
    navigate("/signup", { replace: true });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Typography
                onClick={handelNavigate}
                variant="body2"
                className="sign-up"
              >
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
