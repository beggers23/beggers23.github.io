import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router } from "react-router-dom";
const API = window.API_URL;

const Root = () => {
  return (
    <ThemeProvider>
      <Router>
        <h1>Hello World</h1>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
