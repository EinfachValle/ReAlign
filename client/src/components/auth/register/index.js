import React, { Suspense, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const Register = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      navigate(`/auth/register/step${currentStep + 1}`);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/auth/register/step${currentStep - 1}`);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h1">Register</Typography>

      <Suspense fallback={<Box>Loading...</Box>}>
        <Routes>
          <Route path="/step1" element={<StepOne onNext={goToNextStep} />} />
          <Route
            path="/step2"
            element={
              <StepTwo onNext={goToNextStep} onBack={goToPreviousStep} />
            }
          />
          <Route
            path="/step3"
            element={<StepThree onBack={goToPreviousStep} />}
          />
          <Route
            path="*"
            element={<Navigate replace to="/auth/register/step1" />}
          />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Register;
