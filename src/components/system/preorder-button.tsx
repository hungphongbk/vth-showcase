import { useAuthInitialized } from "../../utils/hooks";
import {
  CheckFilledPrimaryIcon,
  PreorderFilledPrimaryIcon,
} from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import { Showcase } from "../../types/graphql";
import { useEffect, useMemo, useState } from "react";

type PreorderButtonProps = {
  showcase: Pick<Showcase, "status" | "slug" | "expectedSalePrice">;
};
export default function PreorderButton(
  props: PreorderButtonProps
): JSX.Element {
  const { initialized, isLoggedIn } = useAuthInitialized(),
    [open, setOpen] = useState(false),
    [isSubmitting, setIsSubmitting] = useState(false),
    [isSubmitted, setIsSubmitted] = useState(false);

  const IconComponent = useMemo(() => {
    if (isSubmitted) return CheckFilledPrimaryIcon;
    return PreorderFilledPrimaryIcon;
  }, [isSubmitted]);

  useEffect(() => {
    if (isSubmitted) setTimeout(() => setIsSubmitted(false), 1300);
  }, [isSubmitted]);

  return (
    <>
      <VthIconButton
        sx={{ flexGrow: 1, opacity: initialized ? 1 : 0.5 }}
        startIcon={<IconComponent sx={{ width: 22, height: 22 }} />}
        fullWidth
        onClick={() => {
          //
        }}
      >
        ĐĂNG KÝ ĐẶT TRƯỚC
      </VthIconButton>
    </>
  );
}
