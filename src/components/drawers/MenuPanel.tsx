import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { isLoggedInSelector } from "../../store/auth.selectors";
import GoogleColoredIcon from "../../assets/icons/GoogleColoredIcon";
import { signInWithGoogle } from "../../service/auth";
import { afterSignInFirebase, afterSignOut } from "../../store/auth.reducer";
import { FirebaseAuthService } from "../../service";
import { RoleIcon, StyledUpper } from "./menu/styled";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      role
    }
  }
`;

export default function MenuPanel(props: unknown): JSX.Element {
  const isLoggedIn = useAppSelector(isLoggedInSelector),
    dispatch = useAppDispatch(),
    { data } = useQuery(CURRENT_USER);
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: "80%",
        bgcolor: "white",
        borderRadius: "0 30px 30px 0",
      }}
    >
      <StyledUpper>
        {isLoggedIn ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: '"user-icon user-name" "user-icon user-role"',
              gridTemplateColumns: "55px 1fr",
              gridColumnGap: "8px",
              gridRowGap: "4px",
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
              <Typography sx={{ fontWeight: 700, color: "black" }}>
                {data?.currentUser?.name}
              </Typography>
            </Box>
            {data?.currentUser?.role && (
              <RoleIcon role={data.currentUser.role} />
            )}
          </Box>
        ) : null}
      </StyledUpper>
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
          <Button
            variant={"contained"}
            startIcon={<GoogleColoredIcon />}
            sx={{ bgcolor: "white !important" }}
            onClick={() =>
              FirebaseAuthService().then(({ signInWithGoogle }) =>
                signInWithGoogle().then((payload) =>
                  dispatch(afterSignInFirebase(payload!))
                )
              )
            }
          >
            Login with Google
          </Button>
        )}
      </Stack>
    </Box>
  );
}
