import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookmarkIcon from "../../assets/icons/BookmarkIcon";
import { sxFlexCenter, sxFullSize, sxSize } from "../../utils/predefinedSx";
import {
  Backdrop,
  Box,
  Divider,
  Grid,
  Portal,
  Stack,
  Typography,
} from "@mui/material";
import { MotionBox } from "../commons";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useAppSelector } from "../../store";
import { AspectRatio } from "../index";
import { Showcase } from "../../types/graphql";
import StatusBadge from "../StatusBadge";
import { vndCurrency } from "../../utils/string";

const MotionBookmarkIcon = motion(BookmarkIcon);

export default function CartDrawer(): JSX.Element {
  const [open, setOpen] = useState(false),
    list: Showcase[] = useAppSelector((state) => state.cart.list);
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
                <Box sx={{ bgcolor: "white", p: 2, flex: 1 }}>
                  <Stack direction={"column"} alignItems={"stretch"} gap={1}>
                    {list.map((showcase, index) => (
                      <Grid key={showcase.slug} container spacing={2}>
                        <Grid item xs={4}>
                          <AspectRatio
                            sx={{
                              borderRadius: 3,
                              overflow: "hidden",
                              "& img": { ...sxFullSize, objectFit: "cover" },
                            }}
                          >
                            <img
                              src={showcase.image.path}
                              alt={showcase.slug}
                            />
                          </AspectRatio>
                        </Grid>
                        <Grid item xs={8}>
                          <Stack
                            direction={"column"}
                            gap={0.5}
                            alignItems={"start"}
                          >
                            <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                              {showcase.name}
                            </Typography>
                            <StatusBadge status={showcase.status} outlined />
                            <Typography sx={{ fontWeight: 13 }}>
                              Giá dự kiến:{" "}
                              <strong>
                                {vndCurrency(
                                  showcase.expectedSalePrice.regular
                                )}
                              </strong>
                            </Typography>
                            <Typography sx={{ fontWeight: 13 }}>
                              Giá tiên phong:{" "}
                              <strong>
                                {vndCurrency(
                                  showcase.expectedSalePrice.pioneer
                                )}
                              </strong>
                            </Typography>
                          </Stack>
                        </Grid>
                        {index < list.length - 1 && (
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                        )}
                      </Grid>
                    ))}
                  </Stack>
                </Box>
              </MotionBox>
            )}
          </AnimatePresence>
        </Backdrop>
      </Portal>
    </>
  );
}
