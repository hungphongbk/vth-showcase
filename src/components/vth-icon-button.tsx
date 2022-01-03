import { Button, ButtonProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type VthIconButtonProps = Omit<ButtonProps, "startIcon"> & {
  startIcon: ReactNode;
};
export default function VthIconButton({
  children,
  startIcon,
  sx,
  ...props
}: VthIconButtonProps): JSX.Element {
  return (
    <Button
      variant={"contained"}
      color={"primary"}
      sx={{
        display: "flex",
        padding: "5px",
        outline: "3px solid #FFF5CB",
        ...sx,
      }}
      {...props}
    >
      {startIcon}
      <Typography sx={{ fontWeight: 600, flexGrow: 1, textAlign: "center" }}>
        {children}
      </Typography>
    </Button>
  );
}
