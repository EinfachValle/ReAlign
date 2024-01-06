import React, { Suspense, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";

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

  return (
    <Box className={classes.root}>
      <Typography variant="h1">AuthLayout</Typography>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth/login" element={<div>login</div>} />
          <Route path="/auth/register" element={<div>register</div>} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default memo(AuthLayout);
