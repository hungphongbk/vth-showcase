import { Box, Card, Dialog, DialogProps, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { css, styled } from "@mui/material/styles";
import { Timeline } from "@mui/lab";
import React from "react";

export const MotionBox = motion(Box);
export const MotionTypo = motion(Typography);
export const ProductInfoBase = styled(Box)(
  () => css`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      179.76deg,
      rgba(0, 0, 0, 0) 25%,
      #000000 70%,
      #000000 99.9%
    );
    color: white;
    align-items: start;
    flex-grow: 1;
    justify-content: end;
  `
);
export const ProductInfo = styled(ProductInfoBase)`
  padding: 120px 8px 8px;
`;
export const ProductInfoDetailed = styled(ProductInfoBase)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
`;
export const ProductInfoSecond = styled("div")`
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: start;
`;
export const MotionCard = motion(styled(Card)`
  &.MuiCard-root {
    border-radius: 20px;
    padding: 12px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  }
`);

export const StyledTimeline = styled(Timeline)`
  &.MuiTimeline-root {
    margin-top: 0;
    margin-bottom: 0;
  }
  .MuiTimelineItem-root::before {
    flex: unset;
    padding-left: 0;
    padding-right: 0;
  }
  .MuiTimelineConnector-root {
    background-color: unset;
    width: 0;
    border-left: 2px dashed #d5d5d5;
  }
`;

export const StyledDialog = styled((props: Omit<DialogProps, "fullWidth">) => (
  <Dialog {...props} fullWidth />
))(
  (theme) => css`
    .MuiDialog-paper {
      border-radius: 25px;
      overflow-y: visible;
    }
    .MuiDialogContent-root {
      overflow-y: visible;
    }
  `
);
