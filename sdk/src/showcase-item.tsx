import {
  AlertPrimaryIcon,
  FnsDate,
  MediaDto,
  Showcase,
} from "@hungphongbk/vth-sdk";
import { Link, Stack, styled, Typography } from "@mui/material";
import PreloadImage from "./components/PreloadImage";
import VthCountdown from "../../src/components/vth-countdown";

type ShowcaseItemBase = Pick<
  Partial<Showcase>,
  "name" | "slug" | "status" | "expectedSaleAt"
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
};
export default function ShowcaseItem<
  T extends ShowcaseItemBase = ShowcaseItemBase
>({ showcase }: ShowcaseItemProps<T>): JSX.Element {
  return (
    <StyledLink
      sx={{ display: "grid", gridTemplateColumns: "6fr 11fr", gridGap: "7px" }}
      href={`${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/post/${showcase.slug}`}
      target={"_blank"}
    >
      <PreloadImage src={showcase.image} />
      <Stack gap={1}>
        <StyledTitle sx={{ flex: 1 }}>{showcase.name}</StyledTitle>
        <Typography>
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
          gap={2}
          sx={{ alignSelf: "stretch", alignItems: "center" }}
          direction={"row"}
        >
          <VthCountdown
            expectedSaleAt={showcase.expectedSaleAt ?? new Date()}
          />
          <AlertPrimaryIcon sx={{ width: 22, height: 22, mr: 1 }} />
        </Stack>
      </Stack>
    </StyledLink>
  );
}
