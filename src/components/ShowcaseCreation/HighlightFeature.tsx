import React from "react";
import AspectRatio from "../AspectRatio";
import { sxFlexCenter, sxFullSize } from "../../utils/predefinedSx";
import { Box, Stack, Typography } from "@mui/material";
import PlusIcon from "../../assets/icons/PlusIcon";

export default function HighlightFeature(): JSX.Element {
  return (
    <AspectRatio
      ratio={"307/160"}
      sx={{ border: 1, borderStyle: "dashed", borderColor: "divider" }}
    >
      <Box sx={[sxFullSize, sxFlexCenter]}>
        <Stack direction={"column"} alignItems={"center"}>
          <PlusIcon sx={{ color: "black", height: 26, width: 26, mb: 0.5 }} />
          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
            Thêm tính năng
          </Typography>
        </Stack>
      </Box>
    </AspectRatio>
  );
}
