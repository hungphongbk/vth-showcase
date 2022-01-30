import { withPreorder } from "../../src/components/system/with-preorder";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import PreorderDialog from "../../src/components/system/preorder-dialog";
import { PreorderRequestInputDto } from "../../src/types/graphql";
import { useSnackbar } from "notistack";

const PortalPreorderButton = withPreorder<PropsWithChildren<unknown>>({
  refetchQueries: () => [],
})(function PortalPreorderButton({ showcase, doSubmitPreorder, children }) {
  const [open, setOpen] = useState(false),
    [isSubmitting, setIsSubmitting] = useState(false),
    [isSubmitted, setIsSubmitted] = useState(false),
    { enqueueSnackbar } = useSnackbar();

  const submitAnonymously = useCallback(
    async (value: PreorderRequestInputDto | undefined) => {
      setIsSubmitting(true);
      const data = await doSubmitPreorder(value);
      setOpen(false);
      setIsSubmitted(true);
    },
    [doSubmitPreorder]
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
      <Box
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("hihi");
          setOpen(true);
          return false;
        }}
      >
        {children}
      </Box>
      <PreorderDialog
        open={open}
        showcase={showcase}
        onClose={submitAnonymously}
      />
    </>
  );
});

export default PortalPreorderButton;
