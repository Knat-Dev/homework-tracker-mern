import React, { useState, createContext, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { pink, deepPurple } from "@material-ui/core/colors";
import localStorage from "local-storage-fallback";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const type = savedTheme ? JSON.parse(savedTheme).mode : "";

    return createMuiTheme({
      palette: {
        primary: {
          main: deepPurple[400]
        },
        secondary: { main: pink["A400"] },
        type: type ? type : "dark"
      }
    });
  }

  useEffect(() => {
    const type = theme.palette.type;
    const savedTheme = { mode: type };
    localStorage.setItem("theme", JSON.stringify(savedTheme));
    console.log(`Saved theme: ${JSON.stringify(savedTheme)}`);
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
