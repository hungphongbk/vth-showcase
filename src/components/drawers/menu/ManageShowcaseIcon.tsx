import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

function ManageShowcaseIcon(props: SvgIconProps) {
  return (
    <SvgIcon width={22} height={22} fill="none" {...props}>
      <path
        d="M21.12 22H.88a.879.879 0 01-.88-.88V.88A.88.88 0 01.88 0h20.24a.88.88 0 01.88.88v20.24a.88.88 0 01-.88.88zM7.04 4.62a.22.22 0 00-.22-.22h-2.2a.22.22 0 00-.22.22v12.76c0 .121.099.22.22.22h2.2a.22.22 0 00.22-.22V4.62zm5.28 7.7a.22.22 0 00-.22-.22H9.9a.22.22 0 00-.22.22v5.06c0 .121.099.22.22.22h2.2a.22.22 0 00.22-.22v-5.06zm5.28-1.98a.22.22 0 00-.22-.22h-2.2a.22.22 0 00-.22.22v7.04c0 .121.099.22.22.22h2.2a.22.22 0 00.22-.22v-7.04z"
        fill="#000"
      />
    </SvgIcon>
  );
}

export default ManageShowcaseIcon;
