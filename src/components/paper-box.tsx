import { styled } from "@mui/material/styles";
import ImageBox, { ImageBoxProps } from "./image-box";
import bg1 from "../assets/white-paper-texture 1.png";
import { BoxProps } from "@mui/system";
import CloseIcon from "../assets/icons/CloseIcon";
import { Box } from "@mui/material";
import React from "react";
import styles from "./paper-box.module.css";

const PaperBox = styled((props: Omit<ImageBoxProps, "bg">) => (
  <ImageBox bg={bg1} {...props} />
))`
  background-color: #e6e6e6;
  border-radius: 15px;
  width: 100%;
  position: relative;
`;

export default PaperBox;

export const PaperBoxClose = (props: BoxProps) => (
  <Box className={styles.CloseOuter} {...props}>
    <CloseIcon />
  </Box>
);
