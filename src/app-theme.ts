import { createTheme, ThemeOptions } from "@mui/material/styles";
import theme from "./theme";
import check from "./assets/icons/check.svg";
import { DeepPartial } from "redux";

export const appTheme = createTheme(theme, {
  components: {
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: "#F3F3F3",
              borderRadius: "11px",
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: "32px",
          fontSize: 12,
          position: "relative",
          paddingLeft: 24,
          "&:before": {
            position: "absolute",
            content: '""',
            visibility: "visible",
            top: "50%",
            left: "8px",
            width: check.width,
            height: check.height,
            backgroundImage: `url(${check.src})`,
            transform: "translateY(-50%)",
            opacity: 0,
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.yellow.main,
            "&:before": {
              opacity: 1,
            },
          },
        }),
      },
    },
  },
} as DeepPartial<ThemeOptions>);
