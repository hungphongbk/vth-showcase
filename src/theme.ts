import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    variables: {
      appBarHeight: number;
    };
  }

  interface PaletteOptions {
    red: {
      main: string;
      light?: string;
      dark?: string;
    };
    green: {
      main: string;
      light?: string;
      dark?: string;
    };
    yellow: {
      main: string;
      light?: string;
      dark?: string;
    };
    neutral: {
      darkWhite: string;
    };
  }

  interface Palette {
    red: {
      main: string;
      light?: string;
      dark?: string;
    };
    green: {
      main: string;
      light?: string;
      dark?: string;
    };
    yellow: {
      main: string;
      light?: string;
      dark?: string;
    };
    neutral: {
      darkWhite: string;
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
    fontSize: 10,
  },
  palette: {
    primary: {
      main: "#FFDE50",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    red: {
      main: "#FF0000",
    },
    green: {
      main: "#0FD07F",
    },
    yellow: {
      main: "#FFDE50",
      light: "#FFF5CB",
    },
    neutral: { darkWhite: "#F3F3F3" },
  },
  variables: {
    appBarHeight: 59,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderTopLeftRadius: "500px",
          borderTopRightRadius: "500px",
          borderBottomLeftRadius: "500px",
          borderBottomRightRadius: "500px",
          textTransform: "capitalize",
          fontWeight: 700,
          fontSize: 13,
        },
      },
    },
  },
});

export default theme;
