import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface VthPalette {
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
      lightGrey: string;
      darkGrey: string;
      darkWhite: string;
      black: string;
      placeholderText: string;
    };
    gray: {
      main: string;
      light?: string;
      dark?: string;
    };
  }

  interface Theme {
    variables: {
      appBarHeight: number;
    };
  }

  interface PaletteOptions extends VthPalette {}

  interface Palette extends VthPalette {}

  // allow configuration using `createTheme`
  interface ThemeOptions {
    variables: {
      appBarHeight: number;
    };
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    green: true;
    gray: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
    gray: true;
  }
  interface ButtonClasses {
    containedGray: string;
  }
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
    fontSize: 10,
  },
  palette: {
    divider: "#BFBFBF",
    primary: {
      main: "#FFDE50",
      light: "#FFF5CB",
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
      dark: "#008F54",
    },
    yellow: {
      main: "#FFDE50",
      light: "#FFF5CB",
    },
    neutral: {
      darkWhite: "#F3F3F3",
      black: "#000",
      lightGrey: "#D5D5D5",
      darkGrey: "#ABABAB",
      placeholderText: "rgba(0,0,0,.35)",
    },
    gray: {
      main: "#ababab",
      light: "#d5d5d5",
      dark: "#ababab",
    },
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
          "&.Mui-disabled": {
            backgroundColor: "#e3e3e3",
            borderColor: "#d3d3d3",
          },
        },
        contained: {
          "&.MuiButton-containedGray": {
            color: "white",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            sx: {
              bgcolor: "#F3F3F3",
              borderRadius: "11px",
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: "32px",
          fontSize: 12,
        },
      },
    },
  },
});

export default theme;
