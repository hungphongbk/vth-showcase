import React, { PropsWithChildren, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MotionBox } from "./commons";
import { SxProps } from "@mui/system";
import Switch from "./Switch";

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
  const [selected, setSelected] = useState(""),
    [s2, setS2] = useState<Record<string, boolean | undefined>>({});
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
      <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 1.5 }}>
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
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 1.5,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          Thời gian bán dự kiến gần nhất
        </Typography>
        <Switch defaultChecked />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 1.5,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          Thời gian cập nhật mới nhất
        </Typography>
        <Switch />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Giá bán trước tốt nhất</Typography>
        <Switch />
      </Box>
      <Divider />
      <Box>
        <Typography sx={{ fontWeight: 600, my: 1.5 }}>Được đánh giá</Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 1.5 }}>
          {["Siêu phẩm", "Có tiềm năng", "Đáng tiền"].map((content) => (
            <FilterTag
              key={content}
              sx={{
                bgcolor: s2[content] === true ? "#FFDE50" : "#f1f1f1",
                fontWeight: s2[content] === true ? 600 : 500,
              }}
              onClick={() =>
                setS2({
                  ...s2,
                  [content]: !s2[content],
                })
              }
            >
              {content}
            </FilterTag>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
}
