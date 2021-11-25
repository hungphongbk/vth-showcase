import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export default function CloseIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18433 0.033677C4.97989 0.154771 3.76908 0.627146 2.77321 1.36446C2.37011 1.66286 1.67361 2.35608 1.38242 2.74865C0.0140475 4.59346 -0.361671 6.92155 0.359173 9.08933C1.16705 11.5189 3.24374 13.2731 5.82496 13.7066C6.3039 13.787 7.52702 13.7868 7.98121 13.7063C9.47555 13.4414 10.733 12.7957 11.7625 11.7648C12.8927 10.633 13.5755 9.2003 13.7485 7.59743C13.8012 7.11002 13.7713 6.21749 13.6862 5.73302C13.4906 4.61908 13.0646 3.63643 12.3836 2.72833C12.1571 2.42633 11.594 1.84033 11.2723 1.57202C9.89312 0.421396 8.00508 -0.149448 6.18433 0.033677ZM7.3703 1.12461C8.7488 1.24661 9.99896 1.82446 10.9616 2.78461C13.042 4.85958 13.2617 8.06246 11.4854 10.4205C11.2441 10.7409 10.7391 11.2459 10.4187 11.4872C9.21974 12.3904 7.75699 12.8063 6.3138 12.6543C4.28977 12.4411 2.54227 11.2179 1.67164 9.4049C0.910548 7.81996 0.913423 5.95102 1.67936 4.3659C2.45592 2.75883 4.00077 1.56327 5.74683 1.21811C6.33561 1.10174 6.8058 1.07465 7.3703 1.12461ZM4.32496 4.05743C4.17627 4.12571 4.10964 4.1954 4.04489 4.35033C3.98386 4.4964 3.98396 4.62605 4.04511 4.77249C4.07705 4.8489 4.43418 5.22986 5.09918 5.89693L6.10493 6.9058L5.09886 7.91318C4.0833 8.93005 3.99683 9.03458 3.99683 9.24562C3.99683 9.6378 4.44905 9.90371 4.80277 9.71952C4.86652 9.68633 5.36149 9.21533 5.90268 8.67286L6.88665 7.68658L7.88705 8.68299C8.43727 9.23099 8.93246 9.70199 8.98746 9.72961C9.30033 9.8869 9.71158 9.67752 9.76758 9.33246C9.81327 9.05102 9.82358 9.06455 8.70637 7.94418L7.6704 6.90533L8.68905 5.88168C9.78252 4.78286 9.8014 4.75836 9.76996 4.47952C9.7419 4.23036 9.48305 4.00002 9.23121 4.00002C9.0268 4.00002 8.89493 4.10971 7.90327 5.1048C7.36196 5.64799 6.90486 6.0924 6.88746 6.0924C6.87005 6.0924 6.41296 5.64799 5.87165 5.1048C4.71799 3.94718 4.65618 3.90533 4.32496 4.05743Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
