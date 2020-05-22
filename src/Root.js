import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import useDarkMode from "./hooks/useDarkMode";
const API = window.API_URL;

const useStyles = makeStyles({
  applicationContainer: {
    position: "relative",
  },
});

const Root = () => {
  const classes = useStyles();
  const { muiTheme, isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Router>
        <Box className={classes.applicationContainer}>
          <Typography variant="h4">Hello World</Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
