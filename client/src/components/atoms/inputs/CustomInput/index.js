import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "400px",
    height: "50px",
    flexShrink: 0,
    borderRadius: "4px",
    border: "2px solid #EC4E49",
    background: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#FFF",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "&::focus fieldset": {
        border: "none",
      },
    },
  },
});

const CustomInput = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      {...otherProps}
      className={classes.root}
      sx={{
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
        },
      }}
      required
    />
  );
};

export default CustomInput;