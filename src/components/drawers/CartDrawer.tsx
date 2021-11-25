import React, { useState } from "react";
import { motion } from "framer-motion";
import BookmarkIcon from "../../assets/icons/BookmarkIcon";
import { sxSize } from "../../utils/predefinedSx";
import { Box } from "@mui/material";

const MotionBookmarkIcon = motion(BookmarkIcon);

export default function CartDrawer(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open && (
        <Box
          sx={{
            height: 59,
            display: "flex",
            alignItems: "center",
            pr: "20px",
            pl: "11px",
          }}
          onClick={() => setOpen(true)}
        >
          <MotionBookmarkIcon key={"cart-button"} sx={sxSize(22)} />
        </Box>
      )}
    </>
  );
}
