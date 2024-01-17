import React, { Suspense, memo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, CircularProgress } from "@mui/material";
import Login from "components/auth/login";
import Register from "components/auth/register";

// bg images:

import LoginBackground from "../../assets/img/background/Login.png";
import Step1Background from "../../assets/img/background/Step1.png";
import Step2Background from "../../assets/img/background/Step2.png";
import Step3Background from "../../assets/img/background/Step3.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Container: {
    display: "flex",
    padding: "5% 3%",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    width: "804px",
    height: "679px",
    flexShrink: 0,
    borderRadius: "12px 0px 0px 12px",
    background:
      "linear-gradient(234deg, rgba(139, 36, 134, 0.50) -12.8%, rgba(174, 47, 117, 0.50) 27.91%, rgba(216, 59, 96, 0.50) 65.83%, rgba(237, 87, 63, 0.50) 94.27%)",
    "@media (max-width: 769px)": {
      display: "none",
    },
  },
  right: {
    width: "516px",
    height: "679px",
    flexShrink: 0,
    borderRadius: "0px 12px 12px 0px",
    background: "#12141B",
  },
  gradientOverlay: {
    background:
      "linear-gradient(234deg, rgba(139, 36, 134, 0.50) -12.8%, rgba(174, 47, 117, 0.50) 27.91%, rgba(216, 59, 96, 0.50) 65.83%, rgba(237, 87, 63, 0.50) 94.27%)",
    width: "100%",
    height: "100%",
    borderRadius: "12px 0px 0px 12px",
  },
});

const getBackgroundAndText = (path) => {
  switch (path) {
    case "/auth/register/step1":
      return {
        backgroundImage: `url(${Step1Background})`,
        text: "Das Digitale Büro für Die Generation Z.",
      };
    case "/auth/register/step2":
      return {
        backgroundImage: `url(${Step2Background})`,
        text: "Der Sichere Ort für alle Wichtigen Daten.",
      };
    case "/auth/register/step3":
      return {
        backgroundImage: `url(${Step3Background})`,
        text: "Die Projektverwaltung Made in Germany.",
      };
    case "/auth/login":
      return {
        backgroundImage: `url(${LoginBackground})`,
        text: "Deine Projektverwaltung Einfach gemacht.",
      };
    default:
      return {
        backgroundImage: `url(${LoginBackground})`,
        text: "Deine Projektverwaltung Einfach gemacht.",
      };
  }
};

function AuthLayout() {
  const classes = useStyles();
  let location = useLocation();
  // console.log("Current Path: ", location.pathname);
  const { backgroundImage, text } = getBackgroundAndText(location.pathname);

  return (
    <Box className={classes.root}>
      <Box className={classes.Container}>
        <Box className={classes.left} style={{ backgroundImage }}>
          <Box className={classes.gradientOverlay}>
            <Typography variant="h4" color="inherit">
              LOGO
            </Typography>
            <Typography variant="h1">{text}</Typography>
          </Box>
        </Box>
        <Box className={classes.right}>
          <Suspense fallback={<CircularProgress />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/login" element={<Login />} />
              <Route path="/register/*" element={<Register />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AuthLayout);
