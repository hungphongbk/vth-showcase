import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export default function ToggleCollapseIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 49 24">
      <rect
        x="0.5"
        y="0.5"
        width="48"
        height="23"
        rx="11.5"
        fill="#EDEDED"
        stroke="#DDDDDD"
      />
      <path d="M25 18L18.9378 9.75L31.0622 9.75L25 18Z" fill="black" />
    </SvgIcon>
  );
}
