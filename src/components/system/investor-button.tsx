import { LookupFilledPrimaryIcon } from "@hungphongbk/vth-sdk";
import VthIconButton from "../vth-icon-button";
import React, { PropsWithChildren } from "react";

export default function InvestorButton({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <VthIconButton
        sx={{ mb: "-19px", mt: "-19px" }}
        labelProps={{ sx: { mx: 2, color: "black !important" } }}
        startIcon={<LookupFilledPrimaryIcon sx={{ width: 22, height: 22 }} />}
        onClick={() => {
          //
        }}
      >
        {children}
      </VthIconButton>
    </>
  );
}
