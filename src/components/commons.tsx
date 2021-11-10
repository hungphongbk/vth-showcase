import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Timeline } from "@mui/lab";

export const MotionBox = motion(Box);
export const MotionTypo = motion(Typography);
export const ProductInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 64px 8px 8px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(179.76deg, rgba(0, 0, 0, 0) 0.2%, #000000 99.8%);
  color: white;
  align-items: start;
`;
export const ProductInfoThird = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px;
`;
export const ProductInfoSecond = styled.div`
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
