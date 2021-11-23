import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export default function MenuBarIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 54 32" {...props}>
      <g filter="url(#filter0_d_163_840)">
        <rect x="1" y="1" width="50" height="28" rx="14" fill="#6B6B6B" />
      </g>
      <rect x="16" y="7" width="20" height="3" fill="white" />
      <rect x="16" y="13" width="20" height="3" fill="white" />
      <rect x="16" y="19" width="20" height="3" fill="white" />
      <defs>
        <filter
          id="filter0_d_163_840"
          x="0"
          y="0"
          width="54"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_163_840"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_163_840"
            result="shape"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}
