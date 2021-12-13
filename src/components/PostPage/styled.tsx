import { Box, BoxProps, styled } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

type ImageBoxProps = BoxProps & { bg: ImageProps["src"] };
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ bg, children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props}>
      <Image src={bg} layout={"fill"} objectFit={"cover"} />
      {children}
    </Box>
  )
);
export const StyledBox = styled(ImageBox)`
  padding: 11px 13px;
  border-radius: 12px;
  position: relative;
  &,
  * {
    color: white;
  }
  display: grid;
  grid-template-areas: "icon label" "num num";
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
  height: 100%;
  svg {
    height: 26px;
    width: 26px;
  }
`;

export const PLIndexWrapper = styled(Box)`
  display: grid;
  grid-template-areas:
    "st1 st1"
    "nd2 rd3"
    "th4 th6"
    "th5 th6"
    "th7 th7"
    "th8 th8"
    "th9 th9";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(7, 90px);
  grid-gap: 8px;
`;
