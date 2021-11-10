import React, { PropsWithChildren, ReactNode, useState } from "react";
import { MotionCard } from "./commons";
import { Box, CardContent, CardHeader, Collapse } from "@mui/material";
import { SxProps } from "@mui/system";

type CollapseCardProps = PropsWithChildren<{
  header: ReactNode;
  sx?: SxProps;
  defaultOpen?: boolean;
}>;

export default function CollapseCard({
  header,
  children,
  sx,
  defaultOpen = false,
}: CollapseCardProps): JSX.Element {
  const [open, setOpen] = useState(() => defaultOpen);

  return (
    <MotionCard sx={{ ...sx }}>
      <CardHeader
        onClick={() => setOpen(!open)}
        disableTypography
        title={
          <Box
            sx={{
              height: 32,
              borderRadius: "25px",
              bgcolor: "#FFDE50",
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
          </Box>
        }
      />
      <Collapse in={open} timeout={"auto"} sx={{ fontSize: 13 }}>
        <CardContent>{children}</CardContent>
      </Collapse>
    </MotionCard>
  );
}