import React, { forwardRef } from "react";
import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { isLoggedInSelector } from "../../store/auth.selectors";
import { afterSignOut } from "../../store/auth.reducer";
import { FirebaseAuthService } from "../../service";
import { RoleIcon, StyledUpper } from "./menu/styled";
import LoggedInMenu from "./menu/LoggedInMenu";
import FooterMobile from "./menu/footer-mobile";
import LoginPanel from "./login-panel";

const MenuPanel = forwardRef(function MenuPanel(
  props: { onClose: () => void },
  ref
): JSX.Element {
  const isLoggedIn = useAppSelector(isLoggedInSelector),
    dispatch = useAppDispatch(),
    { data, loading } = useAppSelector((state) => state.auth.userInfo);
  return (
    <Box
      ref={ref}
      sx={{
        top: 0,
        left: 0,
        width: "calc(100% - 60px)",
        height: "100%",
        bgcolor: "white",
        borderRadius: "0 30px 0 0",
        position: "relative",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      {isLoggedIn ? (
        <>
          <StyledUpper>
            <Box
              sx={{
                display: "grid",
                gridTemplateAreas:
                  '"user-icon user-name" "user-icon user-role"',
                gridTemplateColumns: "55px 1fr",
                gridColumnGap: "8px",
                gridRowGap: "4px",
                mb: 4,
              }}
            >
              <Avatar
                sx={{
                  width: 55,
                  height: 55,
                  gridArea: "user-icon",
                  bgcolor: "#3e3e3e",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                {data?.currentUser?.name?.[0]}
              </Avatar>
              <Box sx={{ gridArea: "user-name" }}>
                <Typography>Xin chào</Typography>
                {loading ? (
                  <Skeleton variant="rectangular" width={"100%"} height={17} />
                ) : (
                  <Typography sx={{ fontWeight: 700, color: "black" }}>
                    {data?.currentUser.name}
                  </Typography>
                )}
              </Box>
              {loading || !data?.currentUser.approvalStatus ? (
                <Skeleton variant="rectangular" width={147} height={20} />
              ) : (
                <RoleIcon role={data.currentUser.approvalStatus} />
              )}
            </Box>
          </StyledUpper>
          <LoggedInMenu onClose={props.onClose} />
        </>
      ) : null}
      <Stack direction={"column"} alignItems={"center"}>
        {isLoggedIn ? (
          <Button
            variant={"contained"}
            sx={{ bgcolor: "white !important" }}
            onClick={() => {
              FirebaseAuthService().then(({ signOut }) =>
                signOut().then(() => dispatch(afterSignOut()))
              );
            }}
          >
            Logout
          </Button>
        ) : (
          <LoginPanel
            sx={{ borderTopRightRadius: "30px", overflow: "hidden" }}
          />
        )}
      </Stack>
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <FooterMobile />
      </Box>
    </Box>
  );
});

export default MenuPanel;
