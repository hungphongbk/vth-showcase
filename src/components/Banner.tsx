import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { MediaDto, QueryBannerQuery } from "../types/graphql";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFlexCenter, sxFullSize } from "../utils/predefinedSx";
import SlickSlider from "./SlickSlider";
import NextImage from "./NextImage";

type BannerProps = {
  sx?: SxProps;
  banner: QueryBannerQuery["banner"];
};
export default function Banner({ sx, banner }: BannerProps): JSX.Element {
  const bannerCount = banner?.value?.images?.length ?? 0;
  return (
    <>
      {bannerCount === 0 ? (
        <Typography>Banner (updating...)</Typography>
      ) : (
        <SlickSlider>
          {banner!.value!.images!.map((item: MediaDto, index: number) => (
            <Box key={item.path}>
              <AspectRatio ratio={"5/4"} sx={{ ...sx, ...sxFlexCenter }}>
                <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box sx={{ position: "relative", ...sxFullSize }}>
                    <NextImage
                      src={item.path}
                      alt={"ke co tay cong thai hoc"}
                      layout={"fill"}
                      objectFit={"cover"}
                      sizes={"100vw"}
                      placeholder={"blur"}
                      blurDataURL={item.preloadUrl}
                      priority={index === 0}
                    />
                  </Box>
                </Box>
              </AspectRatio>
            </Box>
          ))}
        </SlickSlider>
      )}
    </>
  );
}
