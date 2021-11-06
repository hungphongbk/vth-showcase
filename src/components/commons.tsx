import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

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
