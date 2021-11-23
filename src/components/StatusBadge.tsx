import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import {
  usingShowcaseStatusColor,
  usingShowcaseStatusLabel,
} from "../utils/colors";
import { ShowcaseStatus } from "../types/graphql";

const statusLabels = {
  IDEA: "Idea",
  SHOWCASE: "Showcase",
  COMING: "Coming Soon",
} as Record<string, string>;

export default function StatusBadge(props: {
  status: ShowcaseStatus;
  outlined?: boolean;
  sx?: SxProps;
}): JSX.Element {
  const outlined = props.outlined ?? false,
    color = usingShowcaseStatusColor(props.status);

  return (
    <Box
      sx={{
        color,
        ...(outlined && {
          py: 0.5,
          px: 1.2,
          pb: 0.65,
          borderStyle: "solid",
          borderWidth: "1px",
          fontSize: 15,
          borderRadius: "13px",
        }),
        ...props.sx,
      }}
    >
      <Typography sx={{ fontWeight: 700, lineHeight: 1, fontSize: "inherit" }}>
        {usingShowcaseStatusLabel(props.status)}
      </Typography>
    </Box>
  );
}
