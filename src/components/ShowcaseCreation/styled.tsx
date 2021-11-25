import { css, darken, styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";
import "../../theme";

export const EnhancedTextField = styled(TextField)<{
  placeholderColor?: string;
}>(
  ({ theme, placeholderColor }) => css`
    margin-top: 4px;
    .MuiInputBase-input::placeholder {
      color: ${placeholderColor ?? theme.palette.neutral.darkGrey};
      opacity: 100%;
    }
    .MuiInputBase-formControl {
      &::before {
        border-bottom: 1px solid ${theme.palette.neutral.lightGrey};
      }
      &::after {
        border-bottom: 1px solid ${darken(theme.palette.neutral.lightGrey, 0.2)};
      }
    }
  `
);

export const EnhancedMultilineTextField = styled((props: TextFieldProps) => (
  <TextField {...props} multiline rows={props.rows ?? 4} variant={"filled"} />
))(
  ({ theme }) => css`
    margin-top: 4px;
    .MuiInputBase-input::placeholder {
      color: ${theme.palette.neutral.darkGrey};
      opacity: 100%;
    }
    .MuiInputBase-root {
      border-radius: 10px;
    }
    .MuiInputBase-formControl {
      &::before {
        //border-bottom: 1px solid ${theme.palette.neutral.lightGrey};
        display: none;
      }
      &::after {
        //border-bottom: 1px solid ${darken(
          theme.palette.neutral.lightGrey,
          0.2
        )};
        display: none;
      }
    }
  `
);
