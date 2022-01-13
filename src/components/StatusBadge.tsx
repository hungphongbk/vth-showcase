import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import {
  usingShowcaseStatusColor,
  usingShowcaseStatusIcon,
  usingShowcaseStatusLabel,
} from "../utils/colors";
import { ShowcaseStatus } from "../types/graphql";
import { roundBorder } from "../utils/predefinedSx";

export default function StatusBadge(props: {
  status: ShowcaseStatus;
  outlined?: boolean;
  large?: boolean;
  filled?: boolean;
  noIcon?: boolean;
  sx?: SxProps;
}): JSX.Element {
  const outlined = props.outlined ?? false,
    color = usingShowcaseStatusColor(props.status),
    noIcon = props.noIcon ?? false,
    filled = props.filled ?? false,
    large = props.large ?? false;

  return (
    // @ts-ignore
    <Box
      sx={[
        filled
          ? {
              bgcolor: color,
              color: "white",
              py: 0.5,
              px: 1.2,
              pb: 0.6,
              ...roundBorder,
            }
          : { color },
        {
          display: "flex",
          gap: 0.75,
          alignItems: "center",
          ...(outlined && {
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "13px",
            py: 0.45,
            px: 1,
          }),
          ...(large && {
            py: 0.5,
            px: 1.2,
            pb: 0.65,
            fontSize: 15,
          }),
          ...props.sx,
        },
      ]}
    >
      {!noIcon && usingShowcaseStatusIcon(props.status, { fontSize: "1.3em" })}
      <Typography
        sx={{
          fontWeight: 700,
          lineHeight: 1,
          fontSize: "inherit",
          textTransform: "capitalize",
        }}
      >
        {usingShowcaseStatusLabel(props.status)}
      </Typography>
    </Box>
  );
}
