import { css, styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  InputLabelProps,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import React, { forwardRef, ReactNode } from "react";
import { omit, uniqueId } from "lodash";
import { SxProps } from "@mui/system";

const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => css`
    .MuiInputBase-input {
      box-sizing: border-box;
      &::placeholder {
        color: ${theme.palette.neutral.placeholderText};
        opacity: 1;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    background: ${theme.palette.neutral.darkWhite};
    height: 30px;
    border-radius: 15px;
  `
);

export const StyledInputLabel = styled((props: InputLabelProps) => (
  <InputLabel {...props} shrink focused={false} />
))`
  position: unset;
  transform: unset;
  margin-bottom: 6px;
  font-weight: 600;
  color: black;
`;

export type TextInputProps = Pick<
  OutlinedInputProps,
  | "name"
  | "value"
  | "onChange"
  | "placeholder"
  | "label"
  | "inputProps"
  | "error"
> & { inputSx?: SxProps; helperText?: ReactNode };

const TextInput = forwardRef<unknown, TextInputProps>(function TextInput(
  { label, inputSx, error, helperText, ...props },
  ref
): JSX.Element {
  const id = uniqueId();
  return (
    <FormControl sx={{ width: "100%" }}>
      {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
      <StyledOutlinedInput
        ref={ref}
        id={id}
        sx={inputSx}
        {...omit(props, ["helperText"])}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
});

export { TextInput };
