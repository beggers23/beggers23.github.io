import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import Theme from "../utils/Theme";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);
  const muiTheme = createMuiTheme({
    ...Theme,
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
