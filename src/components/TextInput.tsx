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

const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => css`
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    &.MuiOutlinedInput-root {
      background: ${theme.palette.neutral.darkWhite};
      height: 30px;
      border-radius: 15px;
    }
  `
);

const StyledInputLabel = styled((props: InputLabelProps) => (
  <InputLabel {...props} shrink focused={false} />
))`
  position: unset;
  transform: unset;
  margin-bottom: 4px;
`;

const TextInput = ({
  label,
  ...props
}: Pick<
  OutlinedInputProps,
  "name" | "value" | "onChange" | "placeholder" | "label"
>): JSX.Element => {
  const id = uniqueId();
  return (
    <FormControl sx={{ width: "100%" }}>
      {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
      <StyledOutlinedInput id={id} {...props} />
    </FormControl>
  );
};

export { TextInput };
