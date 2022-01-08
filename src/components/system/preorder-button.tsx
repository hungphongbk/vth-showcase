import { useAuthInitialized } from "../../utils/hooks";
import { PreorderFilledPrimaryIcon } from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import { Showcase } from "../../types/graphql";

type PreorderButtonProps = {
  showcase: Pick<Showcase, "status" | "slug" | "expectedSalePrice">;
};
export default function PreorderButton(
  props: PreorderButtonProps
): JSX.Element {
  const { initialized, isLoggedIn } = useAuthInitialized();
  return (
    <>
      <VthIconButton
        sx={{ flexGrow: 1, opacity: initialized ? 1 : 0.5 }}
        startIcon={<PreorderFilledPrimaryIcon sx={{ width: 22, height: 22 }} />}
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
