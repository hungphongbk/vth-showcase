import React, { useState } from "react";
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { StyledInputLabel, TextInput } from "../TextInput";
import { fullWidth } from "../../utils/predefinedSx";
import { css, styled } from "@mui/material/styles";
import StatusBadge from "../StatusBadge";
import { ShowcaseStatus } from "../../types/graphql";

const StyledSelect = styled(Select)(
  ({ theme }) => css`
    border: unset;
    .MuiSelect-select {
      height: 36px;
      border: 1px solid ${theme.palette.divider};
      padding-top: 6px;
      padding-bottom: 6px;
      box-sizing: border-box;
      border-radius: 18px;
    }
    .MuiOutlinedInput-notchedOutline {
      border: unset;
    }
  `
);

export default function FirstStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();

  const [mucTieu, setMucTieu] = useState("");
  const [tinhTrang, setTinhTrang] = useState("");

  return (
    <>
      <Box
        sx={{
          bgcolor: "yellow.main",
          height: "25vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 15 }}>Banner</Typography>
      </Box>
      <Box sx={{ mt: 1, p: 1 }}>
        <Stack direction={"column"} gap={2}>
          <Box sx={fullWidth}>
            <StyledInputLabel>Mục tiêu dự án của bạn là gì?</StyledInputLabel>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              value={mucTieu}
              onChange={(e) => {
                setMucTieu(e.target.value as string);
                setTinhTrang("");
              }}
            >
              <MenuItem value={"kinh-doanh"}>Kinh doanh</MenuItem>
              <MenuItem value={"y-tuong"}>Thể hiện ý tưởng</MenuItem>
            </StyledSelect>
          </Box>
          <Stack direction={"column"} gap={1.2}>
            <Box sx={fullWidth}>
              <StyledInputLabel>Tình trạng của dự án?</StyledInputLabel>
              <StyledSelect
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                fullWidth
                value={tinhTrang}
                onChange={(e) => setTinhTrang(e.target.value as string)}
              >
                {mucTieu === "kinh-doanh" && (
                  <MenuItem value={"san-sang"}>Sẵn sàng bán</MenuItem>
                )}
                <MenuItem value={"hang-mau"}>Đã có hàng mẫu</MenuItem>
                <MenuItem value={"y-tuong"}>Bản nháp ý tưởng</MenuItem>
              </StyledSelect>
            </Box>
            <TextInput
              placeholder={"Link dự án (nếu có)?"}
              inputSx={{
                height: 36,
                border: 1,
                borderColor: "divider",
                bgcolor: "white",
                borderRadius: "18px",
              }}
            />
          </Stack>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
            <Typography>Dự án của bạn thuộc vào nhóm</Typography>
            <StatusBadge
              status={ShowcaseStatus.Coming}
              filled
              noIcon
              sx={{ fontSize: 13 }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
