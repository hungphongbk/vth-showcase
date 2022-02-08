import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { StyledInputLabel, TextInput } from "../TextInput";
import { sxFullWidth } from "../../utils/predefinedSx";
import StatusBadge from "../StatusBadge";
import { ShowcaseStatus } from "../../types/graphql";
import { useRouter } from "next/router";
import { StyledSelect } from "../commons";

export default function FirstStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();

  const [mucTieu, setMucTieu] = useState("");
  const [tinhTrang, setTinhTrang] = useState("");

  const router = useRouter();

  const setStatus = useCallback(
    (status: ShowcaseStatus) =>
      dispatch({
        type: "update",
        payload: { status },
      }),
    [dispatch]
  );

  useEffect(() => {
    if (mucTieu.length > 0 && tinhTrang.length > 0) {
      if (mucTieu === "kinh-doanh" && tinhTrang === "san-sang")
        setStatus(ShowcaseStatus.Coming);
      else if (tinhTrang === "hang-mau") setStatus(ShowcaseStatus.Showcase);
      else setStatus(ShowcaseStatus.Idea);
    }
  }, [mucTieu, setStatus, tinhTrang]);

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
          <Box sx={sxFullWidth}>
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
              sx={{
                "& .MuiSelect-select": {
                  bgcolor: "#fafafa",
                  borderColor: "divider",
                },
              }}
            >
              <MenuItem value={"kinh-doanh"}>Kinh doanh</MenuItem>
              <MenuItem value={"y-tuong"}>Thể hiện ý tưởng</MenuItem>
            </StyledSelect>
          </Box>
          <Stack direction={"column"} gap={1.2}>
            <Box sx={sxFullWidth}>
              <StyledInputLabel>Tình trạng của dự án?</StyledInputLabel>
              <StyledSelect
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                fullWidth
                value={tinhTrang}
                onChange={(e) => setTinhTrang(e.target.value as string)}
                sx={{
                  "& .MuiSelect-select": {
                    bgcolor: "#fafafa",
                    borderColor: "divider",
                  },
                }}
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
          {showcase.status && (
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
              <Typography>Dự án của bạn thuộc vào nhóm</Typography>
              <StatusBadge
                status={showcase.status}
                filled
                noIcon
                sx={{ fontSize: 13 }}
              />
            </Box>
          )}
          <Box sx={{ px: "15%" }}>
            <Button
              variant={"contained"}
              color={"primary"}
              fullWidth
              disabled={!showcase.status}
              onClick={() => router.push("/manage/create-post/step2")}
            >
              Bước tiếp theo
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
