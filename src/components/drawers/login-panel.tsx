import { SxProps } from "@mui/system";
import { Box, Button, Divider, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import bg from "../../assets/login-header-bg.png";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { TextInput } from "../TextInput";

const Wrapper = styled(Box)`
  width: 100%;
  .MuiInputBase-root {
    background-color: white;
    border: 1px solid #ababab;
  }
`;

type LoginPanelProps = {
  sx?: SxProps;
};
export default function LoginPanel({ sx }: LoginPanelProps): JSX.Element {
  return (
    <Wrapper sx={sx}>
      <Box sx={{ position: "relative", mb: 2 }}>
        <AspectRatio ratio={"338/131"}>
          <Image src={bg} layout={"fill"} objectFit={"cover"} quality={65} />
        </AspectRatio>
        <Typography
          sx={{
            position: "absolute",
            fontFamily: "Montserrat",
            fontSize: 25,
            lineHeight: 24.33 / 25,
            color: "black",
            fontWeight: 700,
            top: "25%",
            left: "27px",
          }}
        >
          WELCOME
          <br />
          BACK
        </Typography>
      </Box>
      <Stack sx={{ mx: 2, mb: 2 }} gap={1}>
        <TextInput placeholder={"Email"} />
        <TextInput placeholder={"Mật khẩu"} />
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{
            display: "flex",
            padding: "5px 3rem",
            alignSelf: "center",
            my: 1,
          }}
        >
          ĐĂNG NHẬP
        </Button>
        <Divider sx={{ width: "60%", alignSelf: "center", mb: 1 }} />
      </Stack>
    </Wrapper>
  );
}
