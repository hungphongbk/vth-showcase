import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    variables: {
      appBarHeight: number;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    variables: {
      appBarHeight: number;
    };
  }
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  variables: {
    appBarHeight: 59,
  },
});

export default theme;
