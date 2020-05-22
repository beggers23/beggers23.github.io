import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultFontFamily = ["Maven Pro", "sans-serif"].join(",");

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  const muiTheme = createMuiTheme({
    typography: {
      fontFamily: defaultFontFamily,
    },
    palette: {
      type: isDarkMode ? "dark" : "light",
    },
  });

  return {
    muiTheme,
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
