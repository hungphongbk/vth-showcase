import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

type BannerProps = {
  sx?: SxProps;
};
export default function Banner(props: BannerProps): JSX.Element {
  return (
    <Box
      sx={{
        ...props.sx,
        height: 200,
        bgcolor: "yellow.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Banner (updating...)</Typography>
    </Box>
  );
}
