import { MediaDto, Showcase } from "@hungphongbk/vth-sdk";
import { Box, styled, Typography } from "@mui/material";
import PreloadImage from "./components/PreloadImage";

type ShowcaseItemBase = Pick<Showcase, "name" | "slug" | "status"> & {
  image: Pick<MediaDto, "path" | "preloadUrl" | "height" | "width">;
};

const StyledBox = styled(Box)`
    background: #ffffff;
    border-radius: 10px;
    padding: 5px;
  `,
  StyledTitle = styled(Typography)`
    &.MuiTypography-root {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
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
    <StyledBox
      sx={{ display: "grid", gridTemplateColumns: "6fr 11fr", gridGap: "7px" }}
    >
      <PreloadImage src={showcase.image} />
      <Box>
        <StyledTitle>{showcase.name}</StyledTitle>
      </Box>
    </StyledBox>
  );
}
