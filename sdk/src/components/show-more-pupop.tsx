import { Popover, PopoverProps, Typography } from "@mui/material";
import React from "react";

export function ShowMorePopup({
  open,
  onClose,
  anchorEl,
  ...props
}: PopoverProps): JSX.Element {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      PaperProps={{ className: "bg-black rounded-lg", sx: { width: "70vw" } }}
      {...props}
    >
      <Typography
        className="text-white"
        sx={{
          p: 2,
          fontWeight: "400",
          fontSize: "12px",
          textAlign: "justify",
        }}
      >
        Chuyên trang giới thiệu sản phẩm mới showcase.vaithuhay.com là nơi giúp
        anh em tìm kiếm các ý tưởng sản phẩm mới lạ, độc đáo, phù hợp với nhu
        cầu của mình mà chưa tìm thấy nơi bán trên thị trường. Đây cũng là nơi
        trình bày sản phẩm sắp ra mắt của Vaithuhay và là cơ hội để anh em nhanh
        tay đặt trước giá hời gói Tiên Phong.
      </Typography>
    </Popover>
  );
}
