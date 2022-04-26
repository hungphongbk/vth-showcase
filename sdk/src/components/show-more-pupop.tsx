import { Box, BoxProps, Button, Popover, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image, { ImageProps } from "next/image";
import React, { forwardRef, useState } from "react";
import IconPopup from "../assets/iconPupop";
import bg1 from "../assets/bg-popup.png";

type ImageBoxProps = BoxProps & { bg: ImageProps["src"] };
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ bg, children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props} sx={{ borderRadius: "15px" }}>
      <Image src={bg} layout={"fill"} objectFit={"cover"} />
      {children}
    </Box>
  )
);
const PopupContent = styled(ImageBox)`
  background-color: #000000;
`;

export default function ShowMorePopup() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [state, setState] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setState(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        style={{
          color: "#000000",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "9px",
          lineHeight: "129.9%",
          borderColor: "#000000",
        }}
        onClick={handleClick}
        variant="outlined"
      >
        Tìm hiểu thêm <IconPopup style={{ marginLeft: "8px" }} />
      </Button>
      <Popover
        open={state}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        sx={{ maxWidth: "350px" }}
      >
        <PopupContent bg={bg1}>
          <Typography
            sx={{
              p: 2,
              color: "#ffffff",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "149.9%",
              textAlign: "justify",
            }}
          >
            Chuyên trang giới thiệu sản phẩm mới showcase.vaithuhay.com là nơi
            giúp anh em tìm kiếm các ý tưởng sản phẩm mới lạ, độc đáo, phù hợp
            với nhu cầu của mình mà chưa tìm thấy nơi bán trên thị trường. Đây
            cũng là nơi trình bày sản phẩm sắp ra mắt của Vaithuhay và là cơ hội
            để anh em nhanh tay đặt trước giá hời gói Tiên Phong.
          </Typography>
        </PopupContent>
      </Popover>
    </>
  );
}
