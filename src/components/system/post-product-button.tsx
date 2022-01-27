import { UploadFilledPrimaryIcon } from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import React, { useCallback, useEffect, useState } from "react";
import { DialogContent } from "@mui/material";
import LoginPanel from "../drawers/login-panel";
import { StyledDialog } from "../commons";
import { useAuthInitialized } from "../../utils/hooks";
import { useRouter } from "next/router";

export default function PostProductButton(): JSX.Element {
  const [open, setOpen] = useState(false),
    { isLoggedIn } = useAuthInitialized(),
    router = useRouter();

  useEffect(() => {
    router.prefetch("/manage/create-post");
  }, [router]);

  const onClick = useCallback(() => {
    if (!isLoggedIn) setOpen(true);
    else {
      // noinspection JSIgnoredPromiseFromCall
      router.push("/manage/create-post");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <VthIconButton
        sx={{ mb: "-19px", mt: "-19px" }}
        labelProps={{ sx: { mx: 2 } }}
        startIcon={<UploadFilledPrimaryIcon sx={{ width: 22, height: 22 }} />}
        onClick={onClick}
      >
        ĐĂNG SẢN PHẨM
      </VthIconButton>
      <StyledDialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          <LoginPanel redirectAfterLogin={"/manage/create-post"} />
        </DialogContent>
      </StyledDialog>
    </>
  );
}
