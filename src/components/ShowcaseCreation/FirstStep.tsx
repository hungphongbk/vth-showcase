import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { StyledInputLabel, TextInput } from "../TextInput";
import { sxFullWidth } from "../../utils/predefinedSx";
import { css, styled } from "@mui/material/styles";
import StatusBadge from "../StatusBadge";
import { ShowcaseStatus } from "../../types/graphql";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

  const router = useRouter();

  const setStatus = useCallback(
    (status: ShowcaseStatus) =>
      dispatch({
        type: "update",
        payload: { status },
      }),
    [dispatch]
  );

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/manage/create-post/step2");
    // eslint-disable-next-line react-hooks/exhaustive-deps

    enqueueSnackbar(
      <Typography>
        Showcase&nbsp;<strong>Dự án test tạo chơi cho vui</strong>&nbsp;được tạo
        thành công!
      </Typography>,
      {
        persist: true,
        variant: "success",
        action: (key) => (
          <Button
            variant={"text"}
            onClick={async () => {
              //
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Xem
          </Button>
        ),
      }
    );
  }, []);

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
