import {
  AlertPrimaryIcon,
  FnsDate,
  MediaDto,
  Showcase,
} from "@hungphongbk/vth-sdk";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PreloadImage from "../../sdk/src/components/PreloadImage";
import VthCountdown from "./vth-countdown";
import PortalPreorderButton from "../../sdk/src/portal-preorder-button";
import { AnchorHTMLAttributes, useMemo } from "react";

export type ShowcaseItemBase = Pick<
  Partial<Showcase>,
  "id" | "name" | "slug" | "status" | "expectedSaleAt"
> & {
  image: Pick<MediaDto, "path" | "preloadUrl" | "height" | "width">;
};

const StyledLink = styled(Link)`
    background: #ffffff;
    border-radius: 10px;
    padding: 5px;
    &,
    &:hover,
    &:visited,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
  `,
  StyledTitle = styled(Typography)`
    &.MuiTypography-root {
      font-style: normal;
      font-weight: 600;
      font-size: 13.5px;
      line-height: 117.4%;
      padding-top: 6px;
    }
  `;

type ShowcaseItemProps<T> = {
  showcase: T;
  seeMoreUi?: boolean;
  inPortal?: boolean;
};
export default function ShowcaseFeaturedItem<
  T extends ShowcaseItemBase = ShowcaseItemBase
>({ showcase, seeMoreUi, inPortal }: ShowcaseItemProps<T>): JSX.Element {
  const link = useMemo(() => {
    if (seeMoreUi) return process.env.NEXT_PUBLIC_HOMEPAGE_URL;
    return `${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/post/${showcase.slug}`;
  }, [seeMoreUi, showcase]);

  const linkProps = useMemo<Partial<AnchorHTMLAttributes<any>>>(() => {
    if (inPortal)
      return {
        target: "_blank",
      };
    return {};
  }, [inPortal]);

  return (
    <StyledLink
      sx={{
        display: "grid",
        gridTemplateColumns: "6fr 12fr",
        gridGap: "7px",
        position: "relative",
        overflow: "hidden",
      }}
      href={link}
      {...linkProps}
    >
      <PreloadImage src={showcase.image} />
      <Stack gap={1}>
        <StyledTitle sx={{ flex: 1 }}>{showcase.name}</StyledTitle>
        <Typography sx={{ fontSize: 10 }}>
          Dự kiến ra mắt:{" "}
          <strong>
            <FnsDate
              format={"dd/MM/yyyy"}
              //TODO remove new Date
              value={showcase.expectedSaleAt ?? new Date()}
            />
          </strong>
        </Typography>
        <Stack
          gap={1.5}
          sx={{ alignSelf: "stretch", alignItems: "center" }}
          direction={"row"}
        >
          <VthCountdown
            expectedSaleAt={showcase.expectedSaleAt ?? new Date()}
          />
          <PortalPreorderButton showcase={showcase as any}>
            <AlertPrimaryIcon sx={{ width: 26, height: 26, mr: 1 }} />
          </PortalPreorderButton>
        </Stack>
      </Stack>
      {seeMoreUi && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant={"outlined"}
            sx={{ borderColor: "white", color: "white", px: 3 }}
          >
            Xem thêm
          </Button>
        </Box>
      )}
    </StyledLink>
  );
}
