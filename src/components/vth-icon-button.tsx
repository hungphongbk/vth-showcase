import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { ReactNode } from "react";

type VthIconButtonProps = Omit<ButtonProps, "startIcon"> & {
  startIcon: ReactNode;
  labelProps?: Omit<TypographyProps, "children">;
};
export default function VthIconButton({
  children,
  startIcon,
  sx,
  color,
  labelProps: _labelProps = {},
  ...props
}: VthIconButtonProps): JSX.Element {
  const { sx: labelSx = undefined, ...labelProps } = _labelProps!;
  return (
    <Button
      variant={"contained"}
      sx={{
        display: "flex",
        padding: "5px",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: `${color ?? "primary"}.light`,
        ...sx,
      }}
      color={color ?? "primary"}
      {...props}
    >
      {startIcon}
      <Typography
        sx={{ fontWeight: 600, flexGrow: 1, textAlign: "center", ...labelSx }}
        {...labelProps}
      >
        {children}
      </Typography>
    </Button>
  );
}
