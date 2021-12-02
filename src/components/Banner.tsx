import React, { useState } from "react";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { QueryBannerQuery } from "../types/graphql";
import { wrap } from "popmotion";
import BannerEffectImage from "./BannerEffectImage";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFlexCenter } from "../utils/predefinedSx";

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
    <AspectRatio
      ratio={"5/4"}
      sx={{
        ...sx,
        ...sxFlexCenter,
      }}
    >
      {bannerCount === 0 ? (
        <Typography>Banner (updating...)</Typography>
      ) : (
        <BannerEffectImage
          direction={direction}
          image={banner!.value!.images![imageIndex]}
          goBack={goBack}
          goNext={goNext}
        />
      )}
    </AspectRatio>
  );
}
