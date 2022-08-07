import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookmarkIcon from "../../assets/icons/BookmarkIcon";
import { sxFlexCenter, sxSize } from "../../utils/predefinedSx";
import { Backdrop, Box, Typography } from "@mui/material";
import { MotionBox } from "../commons";
import CloseIcon from "../../assets/icons/CloseIcon";
import CartDrawerListing from "./cart/cart-drawer-listing";
import { Portal } from "@mui/base";

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
      <Portal>
        <Backdrop open={open} sx={{ zIndex: 13 }}>
          {/* @ts-ignore */}
          <AnimatePresence>
            {open && (
              <MotionBox
                sx={{
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: "90vw",
                  zIndex: 14,
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  overflow: "hidden",
                }}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35 }}
              >
                <Box
                  sx={{
                    bgcolor: "yellow.main",
                    ...sxFlexCenter,
                    height: 59,
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                    GIỎ HÀNG QUAN TÂM
                  </Typography>
                  <CloseIcon
                    onClick={() => setOpen(false)}
                    sx={{
                      width: 24,
                      height: 24,
                      position: "absolute",
                      right: 16,
                    }}
                  />
                </Box>
                <Box
                  sx={{ bgcolor: "white", p: 2, flex: 1 }}
                  className="relative"
                >
                  <CartDrawerListing />
                </Box>
              </MotionBox>
            )}
          </AnimatePresence>
        </Backdrop>
      </Portal>
    </>
  );
}
