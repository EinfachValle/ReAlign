import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import CustomInput from "components/atoms/inputs/CustomInput";
import PasswordInput from "components/atoms/inputs/PasswordInput";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "30px 40px",
  },
  textBox: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
  },
  textBox2: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text1: {
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  text3: {
    color: "#E94057",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textDecoration: "none",
  },
  form: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    marginTop: "50px",
  },
  label: {
    display: "flex",
    alignItems: "flex-start",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "5px",
  },
  Button: {
    display: "flex",
    padding: "10px 30px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "7px",
    background: "#E94057",
  },
  loginOrCreateAcc: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "82px",
  },
  firstLine: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  thirdLine: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // gap: "5px",
    // flexShrink: 0,
  },
});

const StepOne = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {};

  return (
    <Box className={classes.root}>
      <Box className={classes.textBox}>
        <Typography variant="h1" className={classes.text1}>
          Wer bist du?
        </Typography>
        <Box className={classes.textBox2}>
          <Typography variant="h4" className={classes.text2}>
            Willkommen bei ReAlign.
          </Typography>
          <Typography variant="h4" className={classes.text2}>
            Beginnen wir mit den Basics.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.form}>
        <Box className={classes.firstLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="firstName">
              Dein Vorname
            </label>
            <CustomInput
              type="text"
              placeholder="John"
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
              // value={firstName}
            />
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="lastName">
              Dein Nachname
            </label>
            <CustomInput
              type="text"
              placeholder="Doe"
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
            />
          </FormGroup>
        </Box>
        <Box className={classes.secondLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="email">
              Deine E-Mail Adresse
            </label>
            <CustomInput
              fullWidth
              type="email"
              placeholder="re.align@user.com"
              style={{ width: "440px", height: "50px" }}
            />
          </FormGroup>
        </Box>
        <Box className={classes.thirdLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="email">
              Dein Geburtstag
            </label>
            <Box
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <CustomInput
                type="text"
                placeholder="01"
                style={{ width: "50px", height: "50px", flexShrink: 0 }}
                inputProps={{ maxLength: 2 }}
              />
              <CustomInput
                type="text"
                placeholder="12"
                style={{ width: "50px", height: "50px", flexShrink: 0 }}
                inputProps={{ maxLength: 2 }}
              />
              <CustomInput
                type="text"
                placeholder="2003"
                style={{ width: "64px", height: "50px", flexShrink: 0 }}
                inputProps={{ maxLength: 4 }}
              />
            </Box>
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.loginOrCreateAcc}>
        <Button
          variant="primary"
          type="submit"
          // onSubmit={handleSubmit}
          className={classes.Button}
        >
          Fortfahren
        </Button>
        <Typography variant="body1" className={classes.text3}>
          <Link to="/auth/login" className={classes.text3}>
            Du hast schon ein Konto? Log dich hier ein.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default StepOne;
