import React from "react";
import { css, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  OutlinedInput,
  OutlinedInputProps,
  Stack,
  Typography,
} from "@mui/material";
import { ShowcasePriceDto } from "../types/graphql";
import { vndCurrency } from "../utils/string";

const StyledDialog = styled(Dialog)(
  (theme) => css`
    .MuiDialog-paper {
      border-radius: 25px;
      overflow-y: visible;
    }
    .MuiDialogContent-root {
      overflow-y: visible;
    }
  `
);

const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => css`
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    &.MuiOutlinedInput-root {
      background: ${theme.palette.neutral.darkWhite};
      height: 30px;
      border-radius: 15px;
    }
  `
);
const TextInput = (
  props: Pick<OutlinedInputProps, "name" | "value" | "onChange" | "placeholder">
): JSX.Element => (
  <FormControl sx={{ width: "100%" }}>
    <StyledOutlinedInput {...props} />
  </FormControl>
);

type PreorderDialogProps = {
  open: boolean;
  price: ShowcasePriceDto;
  onClose: () => void;
};
export default function PreorderDialog(
  props: PreorderDialogProps
): JSX.Element {
  return (
    <StyledDialog open={props.open} fullWidth onClose={props.onClose}>
      <DialogContent>
        <Box
          sx={{
            borderRadius: "13px",
            marginTop: "-60px",
            bgcolor: "yellow.main",
            p: 1,
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 13 }}>
            Giá bán dự kiến: <strong>{vndCurrency(props.price.regular)}</strong>
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            Giá Tiên Phong: <strong>{vndCurrency(props.price.pioneer)}</strong>
          </Typography>
        </Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: 700, fontSize: 13, mb: 1 }}
        >
          Đăng ký đặt trước để nhận ngay gói giá Tiên Phong hấp dẫn
        </Typography>
        <Stack direction={"column"} gap={1.5} alignItems={"center"}>
          <TextInput placeholder={"Họ tên"} />
          <TextInput placeholder={"Email"} />
          <TextInput placeholder={"Số điện thoại"} />
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={props.onClose}
          >
            Đăng ký
          </Button>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
}
