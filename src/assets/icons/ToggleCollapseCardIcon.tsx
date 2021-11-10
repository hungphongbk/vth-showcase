import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export default function ToggleCollapseCardIcon(
  props: SvgIconProps
): JSX.Element {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="white" />
      <path
        d="M13.3441 15.6708C12.9513 16.2893 12.0487 16.2893 11.6558 15.6708L8.71242 11.0361C8.2896 10.3703 8.76789 9.5 9.55657 9.5L15.4434 9.5C16.2321 9.5 16.7104 10.3703 16.2876 11.0361L13.3441 15.6708Z"
        fill="black"
      />
    </SvgIcon>
  );
}
