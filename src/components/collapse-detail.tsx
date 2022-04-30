import React, { PropsWithChildren, useState } from "react";
import { Box, Collapse } from "@mui/material";
import ToggleCollapseIcon from "../assets/icons/ToggleCollapseIcon";

export default function CollapseDetail(
  props: PropsWithChildren<any>
): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse
        collapsedSize={"100px"}
        in={open}
        timeout={"auto"}
        sx={{ fontSize: 13 }}
      >
        {props.children}
      </Collapse>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ToggleCollapseIcon
          onClick={() => setOpen(!open)}
          sx={{
            transform: `scaleY(${open ? -1 : 1})`,
            width: "50px",
            height: "24px",
          }}
        />
      </Box>
    </>
  );
}
