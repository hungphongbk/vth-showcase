import React, { PropsWithChildren, useState } from "react";
import { Box, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MotionBox } from "./commons";
import { SxProps } from "@mui/system";

const FilterTag = ({
  sx,
  children,
  ...others
}: PropsWithChildren<{ sx?: SxProps; [key: string]: any }>) => (
  <Box
    sx={{
      height: 27,
      px: 2,
      borderRadius: "13.5px",
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      ...sx,
    }}
    {...others}
  >
    {children}
  </Box>
);

export default function FilterPanel(): JSX.Element {
  const [selected, setSelected] = useState("");
  return (
    <MotionBox
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      sx={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        p: 4,
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Lượt xem</Typography>
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            bgcolor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RefreshIcon sx={{ color: "white" }} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        {["Nhiều nhất/Tuần", "Nhiều nhất/Tháng"].map((content) => (
          <FilterTag
            key={content}
            sx={{
              bgcolor: content === selected ? "#FFDE50" : "#f1f1f1",
              fontWeight: content === selected ? 600 : 500,
            }}
            onClick={() => setSelected(content)}
          >
            {content}
          </FilterTag>
        ))}
      </Box>
    </MotionBox>
  );
}
