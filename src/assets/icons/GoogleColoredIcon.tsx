import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export default function GoogleColoredIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props} width={26} height={26} viewBox={"0 0 26 26"}>
      <circle cx={13} cy={13} r={12.5} fill="#fff" stroke="#F3F3F3" />
      <path
        d="M19 13.135c0-.395-.036-.77-.097-1.135H13.13v2.255h3.306a2.784 2.784 0 01-1.226 1.79v1.5h1.971C18.336 16.5 19 14.96 19 13.135z"
        fill="#4285F4"
      />
      <path
        d="M13.13 19c1.655 0 3.04-.54 4.051-1.455l-1.972-1.5c-.551.36-1.251.58-2.079.58-1.599 0-2.953-1.055-3.438-2.48H7.66v1.545A6.136 6.136 0 0013.13 19z"
        fill="#34A853"
      />
      <path
        d="M9.692 14.145A3.415 3.415 0 019.498 13c0-.4.072-.785.194-1.145V10.31H7.66a5.829 5.829 0 000 5.38l2.033-1.545z"
        fill="#FBBC05"
      />
      <path
        d="M13.13 9.375c.904 0 1.712.305 2.35.9l1.747-1.71C16.17 7.595 14.785 7 13.13 7a6.136 6.136 0 00-5.471 3.31l2.033 1.545c.486-1.425 1.84-2.48 3.438-2.48z"
        fill="#EA4335"
      />
    </SvgIcon>
  );
}
