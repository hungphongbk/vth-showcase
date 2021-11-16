import React from "react";
import { Box, Typography } from "@mui/material";
import { toCapitalize } from "../utils/string";
import { SxProps } from "@mui/system";
import { usingContextualColor } from "../utils/colors";

export default function StatusBadge(props: {
  status: string;
  outlined?: boolean;
  sx?: SxProps;
}): JSX.Element {
  const outlined = props.outlined ?? false,
    color = usingContextualColor(props.status);

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
        {toCapitalize(props.status)}
      </Typography>
    </Box>
  );
}
