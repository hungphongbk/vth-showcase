import { css, styled } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  InputLabelProps,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import React from "react";
import { uniqueId } from "lodash";
import { SxProps } from "@mui/system";

const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => css`
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

const TextInput = ({
  label,
  inputSx,
  ...props
}: Pick<
  OutlinedInputProps,
  "name" | "value" | "onChange" | "placeholder" | "label"
> & { inputSx?: SxProps }): JSX.Element => {
  const id = uniqueId();
  return (
    <FormControl sx={{ width: "100%" }}>
      {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
      <StyledOutlinedInput id={id} sx={inputSx} {...props} />
    </FormControl>
  );
};

export { TextInput };
