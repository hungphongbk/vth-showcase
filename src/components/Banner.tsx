import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { MediaDto, QueryBannerQuery } from "../types/graphql";
import { wrap } from "popmotion";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFlexCenter, sxFullSize } from "../utils/predefinedSx";
import SlickSlider from "./SlickSlider";
import Image from "next/image";

type BannerProps = {
  sx?: SxProps;
  banner: QueryBannerQuery["banner"];
};
export default function Banner({ sx, banner }: BannerProps): JSX.Element {
  const [[page, direction], setPage] = useState([0, 0]),
    bannerCount = banner?.value?.images?.length ?? 0;

  const goBack = () => setPage([page - 1, -1]),
    goNext = () => setPage([page + 1, 1]);

  const imageIndex = wrap(0, bannerCount, page);
  return (
    <>
      {bannerCount === 0 ? (
        <Typography>Banner (updating...)</Typography>
      ) : (
        <SlickSlider>
          {banner!.value!.images!.map((item: MediaDto) => (
            <Box key={item.path}>
              <AspectRatio ratio={"5/4"} sx={{ ...sx, ...sxFlexCenter }}>
                <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box sx={{ position: "relative", ...sxFullSize }}>
                    <Image
                      src={item.path}
                      alt={"ke co tay cong thai hoc"}
                      layout={"fill"}
                      objectFit={"cover"}
                      sizes={"100vw"}
                      placeholder={"blur"}
                      blurDataURL={item.preloadUrl}
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
