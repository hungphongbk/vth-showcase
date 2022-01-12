import { useAuthInitialized } from "../../utils/hooks";
import {
  CheckFilledPrimaryIcon,
  PreorderFilledPrimaryIcon,
} from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import { Showcase, useSubmitPreorderMutation } from "../../types/graphql";
import { useEffect, useMemo, useState } from "react";
import { useSnackbar } from "notistack";

type PreorderButtonProps = {
  showcase: Pick<Showcase, "status" | "slug" | "expectedSalePrice">;
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
    }),
    { enqueueSnackbar } = useSnackbar();

  const IconComponent = useMemo(() => {
    if (isSubmitted) return CheckFilledPrimaryIcon;
    return PreorderFilledPrimaryIcon;
  }, [isSubmitted]);

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
        sx={{ flexGrow: 1, opacity: initialized ? 1 : 0.5 }}
        startIcon={<IconComponent sx={{ width: 22, height: 22 }} />}
        fullWidth
        onClick={() => {
          if (isLoggedIn) {
            doSubmitPreorder().then(() => setIsSubmitted(true));
          }
        }}
      >
        ĐĂNG KÝ ĐẶT TRƯỚC
      </VthIconButton>
    </>
  );
}
