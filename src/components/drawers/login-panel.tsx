import { SxProps } from "@mui/system";
import { Box, Divider, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import bg from "../../assets/login-header-bg.png";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { useAppDispatch } from "../../store";
import { FirebaseAuthService } from "../../service";
import { useCallback } from "react";
import { UrlObject } from "url";
import { useRouter } from "next/router";
import * as Sentry from "@sentry/nextjs";
import { afterSignInFirebase } from "../../store/auth.reducer";
import LoginGoogleButtonImg from "../../assets/google-login-button.png";

const Wrapper = styled(Box)`
  width: 100%;
  .MuiInputBase-root {
    background-color: white;
    border: 1px solid #ababab;
  }
`;

type LoginPanelProps = {
  sx?: SxProps;
  redirectAfterLogin?: UrlObject | string;
};
export default function LoginPanel({
  sx,
  redirectAfterLogin,
}: LoginPanelProps): JSX.Element {
  const dispatch = useAppDispatch(),
    router = useRouter();

  const onClick = useCallback(
    () =>
      FirebaseAuthService().then(async ({ signInWithGoogle }) => {
        try {
          const payload = await signInWithGoogle();
          dispatch(afterSignInFirebase(payload!));
          if (redirectAfterLogin) await router.replace(redirectAfterLogin);
        } catch (e) {
          Sentry.captureException(e);
        }
      }),
    [dispatch, redirectAfterLogin, router]
  );

  return (
    <Wrapper sx={sx}>
      <Box sx={{ position: "relative", mb: 2 }}>
        <AspectRatio ratio={"338/149"}>
          <Image src={bg} layout={"fill"} objectFit={"cover"} quality={65} />
        </AspectRatio>
        <Box sx={{ position: "absolute", top: "25%", left: "27px" }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: 25,
              lineHeight: 24.33 / 25,
              color: "black",
              fontWeight: 700,
            }}
          >
            WELCOME
            <br />
            BACK
          </Typography>
          <Typography sx={{ color: "black", fontWeight: 500, mt: 0.5 }}>
            Turn your ideas into reality
          </Typography>
        </Box>
      </Box>
      <Stack sx={{ mx: 2, mb: 2 }} gap={1}>
        <Typography
          sx={{
            color: "black",
            fontWeight: 500,
            my: 1,
            textAlign: "center",
          }}
        >
          Chào mừng bạn trở lại showcase.vaithuhay.com Đăng nhập để cùng khám
          phá các ý tưởng mới lạ, độc đáo, đồng thời là cơ hội để anh em nhanh
          tay đặt trước các gói Tiên Phong tiết kiệm 40% - 60% so với giá niêm
          yết
        </Typography>
        <Divider sx={{ width: "60%", alignSelf: "center", mb: 1 }} />
        <Typography sx={{ color: "#ABABAB", mb: 0.5, textAlign: "center" }}>
          Đăng nhập đơn giản chỉ với
        </Typography>
        <Box sx={{ mx: "10%" }} onClick={onClick}>
          <Image
            src={LoginGoogleButtonImg}
            alt={"login using Google"}
            quality={90}
          />
        </Box>
      </Stack>
    </Wrapper>
  );
}
