import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { IndexPageQuery, MediaDto } from "../types/graphql";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFlexCenter, sxFullSize } from "../utils/predefinedSx";
import SlickSlider from "./slick-slider";
import MediaDisplay from "./media-display";

type BannerProps = {
  sx?: SxProps;
  banner: IndexPageQuery["banner"];
};
export default function Banner({ sx, banner }: BannerProps): JSX.Element {
  const bannerCount = banner?.value?.images?.length ?? 0;
  return (
    <>
      {bannerCount === 0 ? (
        <Typography>Banner (updating...)</Typography>
      ) : (
        <SlickSlider
          sx={{ "& .slick-dots": { bottom: "10px" } }}
          indicatorColor={"#fff"}
        >
          {banner!.value!.images!.map((item: MediaDto, index: number) => (
            <Box key={item.path}>
              <AspectRatio ratio={"5/4"} sx={{ ...sx, ...sxFlexCenter }}>
                <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box sx={{ position: "relative", ...sxFullSize }}>
                    <MediaDisplay
                      src={item}
                      alt={"ke co tay cong thai hoc"}
                      layout={"fill"}
                      objectFit={"cover"}
                      sizes={"100vw"}
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
