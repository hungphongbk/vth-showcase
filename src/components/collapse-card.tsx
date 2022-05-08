import React, { PropsWithChildren, ReactNode, useState } from "react";
import { MotionCard } from "./commons";
import { Box, CardContent, CardHeader, Collapse } from "@mui/material";
import { SxProps } from "@mui/system";
import ToggleCollapseCardIcon from "../assets/icons/ToggleCollapseCardIcon";
import styles from "./collapse-card.module.scss";
import clsx from "clsx";

export type CollapseCardHeaderProps = {
  open?: boolean;
  onToggle?: () => void;
  header: ReactNode;
  sx?: SxProps;
  className?: string;
};
export function CollapseCardHeader({
  open,
  onToggle,
  header,
  sx,
  className,
}: CollapseCardHeaderProps): JSX.Element {
  return (
    <CardHeader
      onClick={onToggle}
      disableTypography
      sx={sx}
      className={className}
      title={
        <Box
          sx={{
            height: 32,
            borderRadius: "25px",
            bgcolor: "yellow.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
            fontSize: 15,
            fontWeight: 600,
            textTransform: "uppercase",
            pl: 3,
          }}
        >
          {header}
          {onToggle && (
            <ToggleCollapseCardIcon
              sx={{
                width: 24,
                height: 24,
                mr: 0.6,
                transform: `scaleY(${open ? 1 : -1})`,
              }}
            />
          )}
        </Box>
      }
    />
  );
}

type CollapseCardProps = PropsWithChildren<{
  header: ReactNode;
  sx?: SxProps;
  defaultOpen?: boolean;
  disableCardStyle?: boolean;
}>;

export default function CollapseCard({
  header,
  children,
  sx,
  defaultOpen = false,
  disableCardStyle = false,
}: CollapseCardProps): JSX.Element {
  const [open, setOpen] = useState(() => defaultOpen);

  return (
    <MotionCard
      className={clsx(styles.Root, disableCardStyle && styles.DisableCardStyle)}
      sx={sx}
    >
      <CollapseCardHeader
        header={header}
        open={open}
        onToggle={() => setOpen(!open)}
      />
      <Collapse in={open} timeout={"auto"} sx={{ fontSize: 13 }}>
        <CardContent>{children}</CardContent>
      </Collapse>
    </MotionCard>
  );
}
