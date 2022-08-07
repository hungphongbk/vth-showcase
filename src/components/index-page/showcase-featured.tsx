import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import bg from "../../../sdk/src/assets/bg.webp";
import ShowcasePortalLogo from "../../../sdk/src/assets/ShowcasePortalLogo";
import NewPopup from "../../../sdk/src/components/new-popup";
import { ShowMorePopup } from "../../../sdk/src/components/show-more-pupop";
import ShowcaseFeaturedList from "../showcase-featured-list";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import React from "react";
import { ShowcaseItemBase } from "../showcase-featured-item";
import { styled } from "@mui/material/styles";
import { usePopover } from "../../utils/hooks";
import IconPopup from "../../../sdk/src/assets/iconPupop";

const Title = styled(Typography)`
  &.MuiTypography-root {
    font-style: normal;
    font-weight: bold;
    font-size: 0.95rem;
    line-height: 139.4%;
    color: white;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`;

type ShowcaseFeaturedProps<T> = {
  items: T[];
};
export default function ShowcaseFeatured<
  T extends ShowcaseItemBase = ShowcaseItemBase
>({ items }: ShowcaseFeaturedProps<T>): JSX.Element {
  const { anchorEl, open, handleOpen, handleClose } = usePopover();

  return (
    <>
      <AspectRatio
        ratio={"752/510"}
        sx={{ my: 3, overflow: "hidden", mx: "-8px" }}
      >
        <Box>
          <Box className="absolute inset-0 z-[-1] object-contain">
            <Image
              src={bg}
              alt={"du an featured"}
              layout={"fill"}
              objectPosition={"bottom"}
              objectFit={"contain"}
              priority
            />
          </Box>
          <Box sx={{ p: 1, width: "100%" }}>
            <Box className="flex justify-between">
              <Box className="flex" onClick={handleOpen}>
                <ShowcasePortalLogo />
                <NewPopup />
              </Box>
              <Button
                className="px-2 py-0.5 h-6 border-black text-black"
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "9px",
                }}
                onClick={handleOpen}
                variant="outlined"
              >
                Tìm hiểu thêm <IconPopup className="ml-2" />
              </Button>
            </Box>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Title>DỰ ÁN CHUẨN BỊ "RỜI BỆ PHÓNG"</Title>
            <ShowcaseFeaturedList items={items} sx={{ mb: 5 }} />
          </Box>
        </Box>
      </AspectRatio>
      <ShowMorePopup open={open} onClose={handleClose} anchorEl={anchorEl} />
    </>
  );
}
