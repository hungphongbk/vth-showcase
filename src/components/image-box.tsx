import { Box, BoxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";
import React, { forwardRef } from "react";

export type ImageBoxProps = BoxProps & {
  bg: ImageProps["src"];
  imageClassName?: string;
};
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ bg, children, imageClassName, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props} sx={{ borderRadius: "15px" }}>
      <Image
        className={imageClassName}
        src={bg}
        layout={"fill"}
        objectFit={"cover"}
      />
      {children}
    </Box>
  )
);

export default ImageBox;
