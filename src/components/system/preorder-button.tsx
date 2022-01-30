import { useAuthInitialized } from "../../utils/hooks";
import {
  CheckFilledPrimaryIcon,
  PreorderFilledPrimaryIcon,
} from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import {
  PreorderRequestInputDto,
  refetchPreorderCartQuery,
  refetchShowcaseDetailQuery,
  refetchShowcasePreviewQuery,
} from "../../types/graphql";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSnackbar } from "notistack";
import PreorderDialog from "./preorder-dialog";
import { FirebaseAuthService } from "../../service";
import { SxProps } from "@mui/system";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase } from "../../store/auth.reducer";
import { withPreorder } from "./with-preorder";

type PreorderButtonProps = {
  sx?: SxProps;
};
const PreorderButton = withPreorder<PreorderButtonProps>({
  refetchQueries: ({ slug }) => [
    refetchPreorderCartQuery(),
    refetchShowcaseDetailQuery({ slug }),
    refetchShowcasePreviewQuery({ slug }),
  ],
})(function PreorderButton({ showcase, doSubmitPreorder, sx }): JSX.Element {
  const { initialized, isLoggedIn } = useAuthInitialized(),
    [open, setOpen] = useState(false),
    [isSubmitting, setIsSubmitting] = useState(false),
    [isSubmitted, setIsSubmitted] = useState(false),
    { enqueueSnackbar } = useSnackbar(),
    dispatch = useAppDispatch();

  const IconComponent = useMemo(() => {
    if (isSubmitted) return CheckFilledPrimaryIcon;
    return PreorderFilledPrimaryIcon;
  }, [isSubmitted]);

  const submitAnonymously = useCallback(
    async (value: PreorderRequestInputDto | undefined) => {
      if (typeof value === "undefined") {
        setOpen(false);
        return;
      }
      setIsSubmitting(true);
      const [authService, data] = await Promise.all([
        FirebaseAuthService(),
        doSubmitPreorder(value),
      ]);
      const payload = await authService.signInWithToken(
        data!.createOnePreorder.customToken!
      );
      await dispatch(afterSignInFirebase(payload!));
      setOpen(false);
      setIsSubmitting(false);
      setIsSubmitted(true);
    },
    [dispatch, doSubmitPreorder]
  );

  useEffect(() => {
    if (isSubmitted) {
      enqueueSnackbar("Đăng ký đặt trước thành công", {
        variant: "success",
      });
      setTimeout(() => setIsSubmitted(false), 1300);
    }
  }, [enqueueSnackbar, isSubmitted]);

  return (
    <>
      <VthIconButton
        aria-label={"Đăng ký đặt trước"}
        aria-disabled={showcase.isPreordered}
        sx={{ flexGrow: 1, opacity: initialized ? 1 : 0.5, ...sx }}
        startIcon={
          <IconComponent
            sx={{
              width: 22,
              height: 22,
              transform: "translate(-0.5px,-0.5px)",
            }}
            color={showcase.isPreordered ? "gray" : undefined}
          />
        }
        fullWidth
        color={showcase.isPreordered ? "gray" : "primary"}
        onClick={() => {
          if (showcase.isPreordered) return;
          if (isLoggedIn) {
            doSubmitPreorder().then(() => setIsSubmitted(true));
          } else setOpen(true);
        }}
      >
        {showcase.isPreordered ? "ĐÃ ĐẶT TRƯỚC" : "ĐĂNG KÝ ĐẶT TRƯỚC"}
      </VthIconButton>
      <PreorderDialog
        open={open}
        showcase={showcase}
        onClose={submitAnonymously}
      />
    </>
  );
});

export default PreorderButton;
