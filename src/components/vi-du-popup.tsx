import { Dialog, DialogProps } from "@mui/material";
import React from "react";
import PaperBox, { PaperBoxClose } from "./paper-box";
import { ShowcaseInvestorStatDto } from "../types/graphql";
import { InvestPlIndex } from "./post-page/invest-pl-index";

const statExample: Partial<ShowcaseInvestorStatDto> = {
  firstYearRevenue: "4.500.000.000 VND",
  totalRevenue: "500.000.000 VND",
  growthRate: 5,
};

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
      <PaperBox className="flex flex-col p-2">
        <PaperBoxClose className="mb-2" onClick={onClose as any} />
        <InvestPlIndex stat={statExample} />
      </PaperBox>
    </Dialog>
  );
}
