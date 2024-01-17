import React, { Suspense, memo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, CircularProgress } from "@mui/material";
import Login from "components/auth/login";
import Register from "components/auth/register";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function AuthLayout() {
  const classes = useStyles();
  let location = useLocation();

  return (
    <Box className={classes.root}>
      <Typography variant="h1">AuthLayout</Typography>
      <Suspense fallback={<CircularProgress />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default memo(AuthLayout);
