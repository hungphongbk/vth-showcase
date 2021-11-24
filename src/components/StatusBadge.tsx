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

const sxSmall: SxProps = {},
  sxLarge: SxProps = {};

export default function StatusBadge(props: {
  status: ShowcaseStatus;
  outlined?: boolean;
  filled?: boolean;
  noIcon?: boolean;
  sx?: SxProps;
}): JSX.Element {
  const outlined = props.outlined ?? false,
    color = usingShowcaseStatusColor(props.status),
    noIcon = props.noIcon ?? false,
    filled = props.filled ?? false;

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
            py: 0.5,
            px: 1.2,
            pb: 0.65,
            borderStyle: "solid",
            borderWidth: "1px",
            fontSize: 15,
            borderRadius: "13px",
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
