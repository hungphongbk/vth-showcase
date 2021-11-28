import React from "react";
import { Box, Button, DialogContent, Stack, Typography } from "@mui/material";
import { Showcase } from "../types/graphql";
import { vndCurrency } from "../utils/string";
import { TextInput } from "./TextInput";
import { StyledDialog } from "./commons";
import { useAppDispatch } from "../store";
import { addShowcaseToCart } from "../store/cart/reducer";

type PreorderDialogProps = {
  open: boolean;
  showcase: Showcase;
  onClose: () => void;
};
export default function PreorderDialog(
  props: PreorderDialogProps
): JSX.Element {
  const dispatch = useAppDispatch();
  const price = props.showcase.expectedSalePrice;

  const handlePreorder = () => {
    dispatch(addShowcaseToCart(props.showcase));
    props.onClose();
  };

  return (
    <StyledDialog open={props.open} onClose={props.onClose}>
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
            Giá bán dự kiến: <strong>{vndCurrency(price!.regular)}</strong>
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            Giá Tiên Phong: <strong>{vndCurrency(price!.pioneer)}</strong>
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
            onClick={handlePreorder}
          >
            Đăng ký
          </Button>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
}
