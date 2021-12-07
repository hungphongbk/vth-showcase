import React, { PropsWithChildren, ReactNode, useState } from "react";
import { MotionCard } from "./commons";
import { Box, CardContent, CardHeader, Collapse } from "@mui/material";
import { SxProps } from "@mui/system";
import ToggleCollapseCardIcon from "../assets/icons/ToggleCollapseCardIcon";

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
      sx={[
        // @ts-ignore
        sx,
        {
          "&.MuiCard-root": {
            p: 1,
          },
        },
        disableCardStyle
          ? {
              "&.MuiCard-root": {
                bgcolor: "transparent",
                boxShadow: "none",
              },
              "& .MuiCardContent-root": {
                p: 0,
                mx: -1,
              },
            }
          : {},
      ]}
    >
      <CardHeader
        onClick={() => setOpen(!open)}
        disableTypography
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
            <ToggleCollapseCardIcon
              sx={{
                width: 24,
                height: 24,
                mr: 0.6,
                transform: `scaleY(${open ? 1 : -1})`,
              }}
            />
          </Box>
        }
      />
      <Collapse in={open} timeout={"auto"} sx={{ fontSize: 13 }}>
        <CardContent>{children}</CardContent>
      </Collapse>
    </MotionCard>
  );
}
