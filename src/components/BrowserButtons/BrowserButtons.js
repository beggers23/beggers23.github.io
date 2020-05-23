import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  browserButtonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  redButton: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.dark,
  },
  yellowButton: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    backgroundColor: theme.palette.warning.dark,
    color: theme.palette.warning.dark,
  },
  greenButton: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.success.dark,
  },
}));

const BrowserButtons = () => {
  const {
    browserButtonsContainer,
    redButton,
    yellowButton,
    greenButton,
  } = useStyles();

  return (
    <div className={browserButtonsContainer}>
      <Avatar className={redButton}>-</Avatar>
      <Avatar className={yellowButton}>-</Avatar>
      <Avatar className={greenButton}>-</Avatar>
    </div>
  );
};

export default BrowserButtons;
