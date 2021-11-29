import React from "react";
import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { isLoggedInSelector } from "../../store/auth.selectors";
import GoogleColoredIcon from "../../assets/icons/GoogleColoredIcon";
import { signInWithGoogle } from "../../service/auth";
import { afterSignInFirebase, afterSignOut } from "../../store/auth.reducer";
import { FirebaseAuthService } from "../../service";

export default function MenuPanel(props: unknown): JSX.Element {
  const isLoggedIn = useAppSelector(isLoggedInSelector),
    dispatch = useAppDispatch();
  return (
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
  );
}
