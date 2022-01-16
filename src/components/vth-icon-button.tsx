import { Button, ButtonProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type VthIconButtonProps = Omit<ButtonProps, "startIcon"> & {
  startIcon: ReactNode;
};
export default function VthIconButton({
  children,
  startIcon,
  sx,
  color,
  ...props
}: VthIconButtonProps): JSX.Element {
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
      <Typography sx={{ fontWeight: 600, flexGrow: 1, textAlign: "center" }}>
        {children}
      </Typography>
    </Button>
  );
}
