import { StyledDialog } from "../commons";
import { useRouter } from "next/router";
import React, { forwardRef, useMemo } from "react";
import {
  Box,
  BoxProps,
  DialogContent,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bg1 from "../../assets/bg-investor-reg-1.png";
import {
  sxFullSize,
  sxFullSizeAbsolute,
} from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { TextInput } from "../TextInput";

type ImageBoxProps = BoxProps;
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props}>
      <Box sx={sxFullSizeAbsolute}>
        <Box sx={{ position: "relative", ...sxFullSize }}>
          <Image src={bg1} layout={"fill"} objectFit={"cover"} />
        </Box>
      </Box>
      {children}
    </Box>
  )
);
const StyledBox = styled(ImageBox)`
  padding: 24px;
  position: relative;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  //display: grid;
  //grid-template-areas: "icon label" "num num";
  //grid-template-columns: auto 1fr;
  //grid-gap: 8px;
  //align-items: center;
  //height: 100%;
`;

type InvestorRegDialogProps = {};
export default function InvestorRegDialog(
  props: InvestorRegDialogProps
): JSX.Element {
  const router = useRouter();

  const open = useMemo(() => {
    return /#corporate/.test(router.asPath);
  }, [router]);

  const handleClose = () =>
    router.push(router.asPath.replace(/#corporate/g, ""), undefined, {
      shallow: true,
    });

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogContent sx={{ position: "relative", zIndex: 0 }}>
        <Box
          sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: -1 }}
        >
          <AspectRatio ratio={"357/190"}>
            <Image src={bg1} layout={"fill"} objectFit={"cover"} />
          </AspectRatio>
        </Box>
        <Typography
          sx={{
            textAlign: "justify",
            fontSize: 13,
            fontWeight: 400,
            color: "#000",
          }}
        >
          Nếu bạn đang mong muốn tìm hiểu sâu hơn về việc đầu tư cùng Vaithuhay,
          đăng nhập ngay để hiển thị các thông tin về Doanh thu dự kiến, P&L chi
          tiết của từng dự án, phương án kinh doanh & hình thức hợp tác
        </Typography>
        <Stack direction={"column"} gap={1.5} alignItems={"center"}>
          <TextInput placeholder={"Họ tên"} />
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
}
