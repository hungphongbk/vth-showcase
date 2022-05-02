import { Dialog, DialogProps } from "@mui/material";
import React from "react";
import PaperBox, { PaperBoxClose } from "./paper-box";

type ViDuPopupProps = Pick<DialogProps, "open" | "onClose">;
export default function ViDuPopup({
  open,
  onClose,
}: ViDuPopupProps): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { borderRadius: 15 } }}
      fullWidth
    >
      <PaperBox className="flex flex-col">
        <PaperBoxClose onClick={onClose as any} />
      </PaperBox>
    </Dialog>
  );
}
