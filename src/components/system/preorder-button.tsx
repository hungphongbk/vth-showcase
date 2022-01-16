import { useAuthInitialized } from "../../utils/hooks";
import {
  CheckFilledPrimaryIcon,
  PreorderFilledPrimaryIcon,
} from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import {
  refetchPreorderCartQuery,
  Showcase,
  useSubmitPreorderMutation,
} from "../../types/graphql";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSnackbar } from "notistack";
import PreorderDialog from "./preorder-dialog";
import { FirebaseAuthService } from "../../service";
import { SxProps } from "@mui/system";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase } from "../../store/auth.reducer";

type PreorderButtonProps = {
  showcase: Pick<
    Showcase,
    "status" | "slug" | "expectedSalePrice" | "isPreordered"
  >;
  sx?: SxProps;
  refetchShowcase: any;
};
export default function PreorderButton(
  props: PreorderButtonProps
): JSX.Element {
  const { initialized, isLoggedIn } = useAuthInitialized(),
    [open, setOpen] = useState(false),
    [isSubmitting, setIsSubmitting] = useState(false),
    [isSubmitted, setIsSubmitted] = useState(false),
    [doSubmitPreorder] = useSubmitPreorderMutation({
      variables: { slug: props.showcase.slug },
      refetchQueries: [refetchPreorderCartQuery(), props.refetchShowcase],
    }),
    { enqueueSnackbar } = useSnackbar(),
    dispatch = useAppDispatch();

  const IconComponent = useMemo(() => {
    if (isSubmitted) return CheckFilledPrimaryIcon;
    return PreorderFilledPrimaryIcon;
  }, [isSubmitted]);

  const submitAnonymously = useCallback(
    async (value) => {
      setIsSubmitting(true);
      const [authService, { data }] = await Promise.all([
        FirebaseAuthService(),
        doSubmitPreorder({
          variables: {
            slug: props.showcase.slug,
            input: value,
          },
        }),
      ]);
      const payload = await authService.signInWithToken(
        data!.createOnePreorder.customToken!
      );
      await dispatch(afterSignInFirebase(payload!));
      setOpen(false);
      setIsSubmitting(false);
      setIsSubmitted(true);
    },
    [dispatch, doSubmitPreorder, props.showcase.slug]
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
        sx={{ flexGrow: 1, opacity: initialized ? 1 : 0.5, ...props.sx }}
        startIcon={
          <IconComponent
            sx={{
              width: 22,
              height: 22,
              transform: "translate(-0.5px,-0.5px)",
            }}
            color={props.showcase.isPreordered ? "gray" : undefined}
          />
        }
        fullWidth
        color={props.showcase.isPreordered ? "gray" : "primary"}
        onClick={() => {
          if (props.showcase.isPreordered) return;
          if (isLoggedIn) {
            doSubmitPreorder().then(() => setIsSubmitted(true));
          } else setOpen(true);
        }}
      >
        {props.showcase.isPreordered ? "ĐÃ ĐẶT TRƯỚC" : "ĐĂNG KÝ ĐẶT TRƯỚC"}
      </VthIconButton>
      <PreorderDialog
        open={open}
        showcase={props.showcase}
        onClose={submitAnonymously}
      />
    </>
  );
}
